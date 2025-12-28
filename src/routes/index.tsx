import { createFileRoute, Link } from '@tanstack/react-router'
import {
  getFeaturedArticle,
  getLatestArticles,
  getUpcomingItineraries,
} from '@/data/homePageData'
import { motion } from 'motion/react'
import LatestArticlesGrid from '@/components/ArticleCard'
import FeaturedArticleCard from '@/components/FearuredCard'

export const Route = createFileRoute('/')({
  loader: async () => {
    // These run in parallel on the server (if SSR) or client
    const [featured, latest, upcoming] = await Promise.all([
      getFeaturedArticle(),
      getLatestArticles(),
      getUpcomingItineraries(),
    ])

    return {
      featured,
      latest,
      upcoming,
    }
  },
  // Optional: control caching freshness (default staleTime is 0 → background refetch on every visit)
  staleTime: 60_000, // consider fresh for 1 minute
  // Or Infinity to never background refetch automatically
  component: App,
})

function App() {
  // Access the cached loader data
  const { featured, latest, upcoming } = Route.useLoaderData()

  return (
    <div className='min-h-screen flex flex-col'>
      <section className='bg-[url(/home-hero-bg.jpg)] bg-fixed bg-bottom-left bg-no-repeat bg-cover min-h-screen flex flex-col items-center justify-between sticky top-0'>
        <div></div>
        <FeaturedArticleCard featured={featured} />
        <div className='m-5 flex flex-col items-center gap-3 text-paragraph-color1 paragraph4'>
          <p>Scroll for more</p>
          <motion.img
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            src='/Arrow.svg'
            alt='Arrow Down'
          />
        </div>
      </section>
      <div className='min-h-screen flex flex-col sticky top-0'>
        <section className='bg-background-color1 min-h-screen flex flex-col items-center justify-between gap-10 px-5 py-20'>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            className='text-center header2'
          >
            Latest travel stories
          </motion.h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <LatestArticlesGrid articles={latest} />
          </div>
          <Link
            className='text-textlink hover:text-paragraph-color4'
            to='/articles'
          >
            View all articles
          </Link>
        </section>

        <section className='bg-background-color4 text-headline-color3 py-20 px-5 flex flex-col items-center gap-10'>
          <h2 className='text-center header2'>Upcoming itinerary</h2>
          <div className='w-full last:border-b last:border-dashed'>
            {upcoming.map((item) => (
              <div
                key={item.number}
                className='flex justify-between border-t border-dashed gap-5 py-[14.5px] w-full'
              >
                <h1 className='flex flex-col justify-center text-display w-[144px]'>
                  {item.number}
                </h1>
                <div className='flex-1 flex flex-col justify-center'>
                  <h3 className='header3'>{item.destination}</h3>
                  <p>
                    {item.dates} <br />
                    {item.description}
                  </p>
                </div>
                <img
                  className={`w-[230px] max-sm:hidden ${item.rounded ? 'rounded-full' : ''}`}
                  src={item.image}
                  alt=''
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
