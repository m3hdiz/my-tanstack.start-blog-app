import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <>
      <header className='w-full flex justify-center'>
        <nav className='flex items-center p-6 bg-background-color1 gap-6 rounded-full'>
          <Link
            to='/'
            className='navlink text-paragraph-color4'
            activeProps={{
              //the className here did not work so I used style instead
              style: { color: 'var(--paragraph-color1)' },
            }}
          >
            Home
          </Link>
          <Link
            to='/articles'
            className='navlink text-paragraph-color4'
            activeProps={{
              //the className here did not work so I used style instead
              style: { color: 'var(--paragraph-color1)' },
            }}
          >
            Articles
          </Link>
          <Link
            to='/about'
            className='navlink text-paragraph-color4'
            activeProps={{
              //the className here did not work so I used style instead
              style: { color: 'var(--paragraph-color1)' },
            }}
          >
            About
          </Link>
        </nav>
      </header>
    </>
  )
}
