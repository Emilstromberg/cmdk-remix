import path from "path";
import { pathToFileURL } from "url";
import express from "express";
import chokidar from "chokidar";
import compression from "compression";
import morgan from "morgan";
import address from "address";
import closeWithGrace from "close-with-grace";
import { createRequestHandler } from "@remix-run/express";
import { broadcastDevReady } from "@remix-run/server-runtime";
import getPort, { portNumbers } from "get-port";
import chalk from "chalk";
const BUILD_DIR = path.join(process.cwd(), "build", "index.js");
const BUILD_DIR_FILE_URL = pathToFileURL(BUILD_DIR).href;
let update = Date.now();
const getLatestBuild = () => import(`${BUILD_DIR_FILE_URL}?update=${update}`);
const app = express();
app.use(compression());
app.disable("x-powered-by");
app.use(
  "/build",
  express.static("public/build", { immutable: true, maxAge: "1y" })
);
app.use(express.static("public", { maxAge: "1w" }));
morgan.token("url", (req, res) => decodeURIComponent(req.url ?? ""));
app.use(
  morgan(
    "[:date[web]] - :status :method :url  :res[content-length] - :response-time ms"
  )
);
app.all(
  "*",
  process.env.NODE_ENV === "development" ? async (req, res, next) => {
    return createRequestHandler({
      build: await getLatestBuild(),
      mode: process.env.NODE_ENV
    })(req, res, next);
  } : createRequestHandler({
    build: await getLatestBuild(),
    mode: process.env.NODE_ENV
  })
);
const desiredPort = Number(process.env.PORT || 3e3);
const portToUse = await getPort({
  port: portNumbers(desiredPort, desiredPort + 100)
});
const server = app.listen(portToUse, () => {
  const addy = server.address();
  const portUsed = desiredPort === portToUse ? desiredPort : addy && typeof addy === "object" ? addy.port : 0;
  if (portUsed !== desiredPort) {
    console.warn(
      chalk.yellow(
        `\u26A0\uFE0F  Port ${desiredPort} is not available, using ${portUsed} instead.`
      )
    );
  }
  console.log(`\u{1F680}  We have liftoff!`);
  const localUrl = `http://localhost:${portUsed}`;
  let lanUrl = null;
  const localIp = address.ip();
  if (/^10[.]|^172[.](1[6-9]|2[0-9]|3[0-1])[.]|^192[.]168[.]/.test(localIp)) {
    lanUrl = `http://${localIp}:${portUsed}`;
  }
  console.log(`${chalk.bold("Local:")} ${chalk.cyan(localUrl)}`);
  console.log(`${lanUrl ? `${chalk.bold("On Your Network:")}  ${chalk.cyan(lanUrl)}` : ""}`);
  console.log(`${chalk.bold("Press Ctrl+C to stop")}`);
  if (process.env.NODE_ENV === "development") {
    notifyRemixDevReady();
  }
});
closeWithGrace(async () => {
  await new Promise((resolve, reject) => {
    server.close((e) => e ? reject(e) : resolve("ok"));
  });
});
async function notifyRemixDevReady() {
  update = Date.now();
  const build = await getLatestBuild();
  broadcastDevReady(build);
}
if (process.env.NODE_ENV === "development") {
  const watcher = chokidar.watch(
    `${path.dirname(BUILD_DIR).replace(/\\/g, "/")}/**.*`,
    {
      ignored: ["**/**.map"]
    }
  );
  watcher.on("all", notifyRemixDevReady);
}
