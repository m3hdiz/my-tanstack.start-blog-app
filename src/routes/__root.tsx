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
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <HeadContent />
      </head>
      <body>
        <section className='max-xl:hidden fixed left-0 w-1/3 h-full bg-background-color3 flex flex-col justify-between text-center py-5'>
          <Header />
          <div className='flex flex-col justify-center items-center gap-10 h-full'>
            <h1 className='header1 text-headline-color2'>The Roam Report</h1>
            <div className='flex flex-col justify-between items-center gap-6'>
              <img
                src='/Train illustration.svg'
                alt='Train illustration'
                className='w-30'
              />
              <p className='paragraph2 text-paragraph-color2'>
                Stories and photos of long walks,
                <br />
                wrong turns, and everyday discoveries
              </p>
            </div>
          </div>
          <div className='flex w-full justify-around items-center text-headline-color2 header4 mask-r-from-70% mask-l-from-70%'>
            <p>Currently in</p>
            <div>
              <img src='/Globe icon.svg' alt='Globe icon' />
            </div>
            <p>Dallol, Ethiopia</p>
            <div>
              <img src='/Globe icon.svg' alt='Globe icon' />
            </div>
            <p>14.2417° N</p>
            <div>
              <img src='/Globe icon.svg' alt='Globe icon' />
            </div>
            <p>42°F</p>
          </div>
        </section>
        <section className='min-h-screen xl:w-2/3 max-xl:w-full justify-self-end'>
          {/* Main content area */}
          {children}
        </section>

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
