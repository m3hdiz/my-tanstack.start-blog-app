import { motion } from 'framer-motion' // Note: it's framer-motion, not 'motion/react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { locationQueryOptions } from '@/data/current_location'
import Navbar from './Navbar'
import { Suspense } from 'react'

function LocationContent() {
  const { data } = useSuspenseQuery(locationQueryOptions())

  // Since this component is only rendered inside Suspense,
  // when the query is loading, React will show the fallback instead.
  // When data is available, this renders the actual content.

  return (
    <>
      <p>Currently in</p>
      <div>
        <img src={data.icon.src} alt={data.icon.alt} />
      </div>
      <p>{data.location}</p>
      <div>
        <img src={data.icon.src} alt={data.icon.alt} />
      </div>
      <p>{data.coordinates}</p>
      <div>
        <img src={data.icon.src} alt={data.icon.alt} />
      </div>
      <p>{data.temperature}</p>
    </>
  )
}

export default function Header() {
  return (
    <div className='flex flex-col gap-[135px] h-full'>
      {/* Desktop Navbar */}
      <div>
        <div className='max-xl:hidden'>
          <Navbar />
        </div>
      </div>

      {/* Main Hero Section */}
      <div className='flex flex-col justify-center items-center gap-10 flex-1'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='header1 text-headline-color2'
        >
          The Roam Report
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          className='flex flex-col justify-between items-center gap-6 text-center'
        >
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
        </motion.div>
      </div>

      {/* Location Bar at the Bottom */}
      <div className='w-full mask-r-from-70% mask-l-from-70%'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: 0.2,
            repeat: Infinity,
            repeatType: 'reverse', // This makes it pulse gently instead of hard fade in/out
          }}
          className='flex sm:flex-row justify-center items-center gap-6 py-4 text-headline-color2 header4'
        >
          <Suspense
            fallback={
              <>
                <div>
                  <img src='/Globe icon.svg?url' alt='Globe' />
                </div>
                <div>Finding current location...</div>
                <div>
                  <img src='/Globe icon.svg?url' alt='Globe' />
                </div>
              </>
            }
          >
            <LocationContent />
          </Suspense>
        </motion.div>
      </div>
    </div>
  )
}
