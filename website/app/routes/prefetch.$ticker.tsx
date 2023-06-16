import type { LoaderArgs } from '@remix-run/server-runtime'
import { typedjson, useTypedLoaderData } from 'remix-typedjson'

function simulateLoaderPending() {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, 1600, 'Done')
  })
}

export async function loader({ params }: LoaderArgs) {
  console.log(params.ticker)

  const res = await simulateLoaderPending()
  return typedjson({ res, ticker: params.ticker })
}

export default function Index() {
  const loaderData = useTypedLoaderData<typeof loader>()

  return <div className="mx-auto flex w-1/2 pt-2 text-light-c-1 dark:text-black-c-1">{loaderData.ticker}</div>
}
