/** @type {import('@remix-run/dev').AppConfig} */
export default {
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  cacheDirectory: './node_modules/.cache/remix',
  future: {
    unstable_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
  postcss: true,
  publicPath: '/build/',
  serverModuleFormat: 'esm',
  serverPlatform: 'node',
  tailwind: true,
  watchPaths: ['./tailwind.config.ts'],
}
