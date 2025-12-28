import {
  HeadContent,
  Link,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import Header from '@/components/Header'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'

import { ReactLenis } from 'lenis/react'
import Navbar from '@/components/Navbar'
import FooterLandscapeBorder from '@/components/FooterLandscapeBorder'
import { motion } from 'motion/react'
import { Image as OptimisedImg } from '@unpic/react'

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
        <section className='min-h-screen xl:w-2/3 max-xl:w-full justify-self-end'>
          {/* Main content area */}
          <main>{children}</main>
          <footer className='relative bg-background-color2 text-paragraph-color1'>
            {/* Curved SVG - now takes full width and responsive height */}
            <div className='absolute inset-x-0 top-0 -translate-y-full'>
              <FooterLandscapeBorder />
            </div>

            {/* Footer content with generous top padding to account for the overlap */}
            <div className='pt-20 pb-23.5 px-8 flex flex-col gap-10 justify-center items-center'>
              <div className='flex flex-col gap-4 justify-center items-center text-center'>
                <h3 className='header3'>End of the trail</h3>
                <h1 className='header1'>
                  Less rush. <br />
                  More wonder.
                </h1>
              </div>
              <FooterXnavIcons />
              <FooterNav />
              <p className='paragraph3'>Copyright ©2025 · The Roam Report</p>
            </div>
          </footer>
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

function FooterNav() {
  return (
    <div className='flex gap-4 justify-center items-center'>
      {navIcons.map((icon) => (
        <Link
          to={icon.to}
          key={icon.Icon}
          className='navlink text-paragraph-color4 hover:text-headline-color2 transition-all duration-500'
          activeProps={{
            style: { color: 'var(--paragraph-color1)' },
          }}
        >
          <OptimisedImg
            src={icon.Icon}
            width={24}
            height={24}
            layout='constrained'
          ></OptimisedImg>
        </Link>
      ))}
    </div>
  )
}

function FooterXnavIcons() {
  return (
    <div className='flex gap-6 justify-center items-center'>
      {navItems.map((item) => (
        <motion.div
          key={item.to}
          whileTap={{ scale: 0.9 }}
          className='cursor-pointer'
        >
          <Link
            to={item.to}
            className='navlink text-paragraph-color4 hover:text-headline-color2 transition-all duration-500'
            activeProps={{
              style: { color: 'var(--paragraph-color1)' },
            }}
          >
            {item.label}
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/articles', label: 'Articles' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const navIcons = [
  { to: '/#', Icon: '/Instagram.svg' },
  { to: '/#', Icon: '/pintrest.svg' },
  { to: '/#', Icon: '/youtube.svg' },
  { to: '/#', Icon: '/Facebook.svg' },
  { to: '/#', Icon: '/X.svg' },
]
