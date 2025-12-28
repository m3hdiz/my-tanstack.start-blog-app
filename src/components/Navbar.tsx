import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'

export default function Navbar() {
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/articles', label: 'Articles' },
    { to: '/about', label: 'About' },
  ]

  return (
    <>
      <motion.div
        className='w-full flex justify-center max-xl:fixed max-xl:top-5 max-xl:z-50'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      >
        <nav className='flex items-center p-6 bg-background-color1 gap-6 rounded-full'>
          {navItems.map((item) => (
            <motion.div
              key={item.to}
              whileTap={{ scale: 0.9 }}
              className='cursor-pointer'
            >
              <Link
                to={item.to}
                className='text-navlink text-paragraph-color4 hover:text-headline-color2 transition-all duration-500'
                activeProps={{
                  style: { color: 'var(--paragraph-color1)' },
                }}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </>
  )
}
