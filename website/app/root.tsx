import type { LinksFunction, V2_MetaFunction } from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import tailwind from './styles/tailwind.css'
import { TailwindIndicator } from './components/tailwind-indicator.tsx'
import { cn } from './utils/cn.ts'

export let links: LinksFunction = () => [
  { rel: 'preconnect', href: '//fonts.gstatic.com', crossOrigin: 'anonymous' },
  { rel: 'stylesheet', href: tailwind },
  {
    rel: 'stylesheet',
    href: '//fonts.googleapis.com/css?family=Work+Sans:300,400,600,700&amp;lang=en',
  },
]

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Custom Command Component' },
    { charSet: 'utf-8' },
    { name: 'viewport', content: 'width=device-width,initial-scale=1' },
  ]
}

export default function App() {
  const theme = 'dark'

  return (
    <html lang="en" className={cn('h-screen w-screen', theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-light-bc-1 dark:bg-black-bc-1 h-full w-full">
        <Outlet />
        <TailwindIndicator />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
