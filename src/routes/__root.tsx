import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import Header from '../components/Header'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'

import { motion } from 'motion/react'

import { ReactLenis } from 'lenis/react'
import Navbar from '@/components/Navbar'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
  notFoundComponent: () => {
    return <p>Not found!</p>
  },
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <ReactLenis root />
      <head>
        <HeadContent />
      </head>
      <body>
        <div className='xl:hidden'>
          <Navbar />
        </div>
        <section className='xl:fixed xl:left-0 xl:w-1/3 h-full bg-background-color3 flex flex-col max-xl:gap-[135px] text-center py-5'>
          <Header />
        </section>
        <main className='min-h-screen xl:w-2/3 max-xl:w-full justify-self-end'>
          {/* Main content area */}
          {children}
        </main>

        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
