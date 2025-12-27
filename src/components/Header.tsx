import { motion } from 'motion/react'
import Navbar from './Navbar'
import { useSuspenseQuery } from '@tanstack/react-query'
import { locationQueryOptions } from '@/data/current_location'
import { Suspense } from 'react'

function LocationContent() {
  const { data } = useSuspenseQuery(locationQueryOptions())

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
    <>
      <Navbar />
      <div className='flex flex-col justify-center items-center gap-10 h-full'>
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
          className='flex flex-col justify-between items-center gap-6'
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
      <div className='w-full mask-r-from-70% mask-l-from-70%'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, repeatCount: Infinity }}
          transition={{
            duration: 1,
            ease: 'easeOut',
            delay: 0.2,
          }}
          className='flex justify-around gap-4 w-full items-center text-headline-color2 header4 transition-all duration-300'
        >
          <Suspense
            fallback={
              <>
                <div>
                  <img src={'/Globe icon.svg?url'} alt='Globe' />
                </div>
                <div>Finding Current location...</div>
                <div>
                  <img src={'/Globe icon.svg?url'} alt='Globe' />
                </div>
              </>
            }
          >
            <LocationContent />
          </Suspense>
        </motion.div>
      </div>
    </>
  )
}
