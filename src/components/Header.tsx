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
      <motion.div
        initial={{ opacity: 0, translateX: -100 }}
        animate={{ opacity: 1, translateX: +100 }}
        transition={{
          duration: 1,
          ease: 'easeOut',
          delay: 0.2,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        className='w-full mask-r-from-70% mask-l-from-70%'
      >
        <div className='flex gap-4 w-full items-center text-headline-color2 header4'>
          <Suspense fallback={<div>Loading location...</div>}>
            <LocationContent />
          </Suspense>
        </div>
      </motion.div>
    </>
  )
}
