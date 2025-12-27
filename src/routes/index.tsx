import { createFileRoute, Link } from '@tanstack/react-router'
import {
  getFeaturedArticle,
  getLatestArticles,
  getUpcomingItineraries,
} from '@/data/homePageData'

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
  staleTime: 5 * 60_000, // consider fresh for 5 minute
  // Or Infinity to never background refetch automatically
  component: App,
})

function App() {
  // Access the cached loader data
  const { featured, latest, upcoming } = Route.useLoaderData()

  return (
    <>
      <section className='bg-[url(/home-hero-bg.jpg)] bg-fixed bg-bottom-left bg-no-repeat bg-cover min-h-screen flex flex-col items-center justify-between'>
        <div></div>
        <div className='w-[370px] h-[460px] p-2.5 bg-background-color1 flex flex-col text-center'>
          <img
            className='rounded-3xl h-[268px] w-full object-cover'
            src={featured.image}
            alt={featured.title}
          />
          <div className='flex flex-col h-full justify-center gap-3 p-3.5'>
            <p className='text-paragraph-color4 paragraph3'>Featured article</p>
            <h3 className='header3 text-headline-color1'>{featured.title}</h3>
          </div>
        </div>
        <div className='m-5 flex flex-col items-center gap-3 text-paragraph-color1 paragraph4'>
          <p>Scroll for more</p>
          <img src='/Arrow.svg' alt='Arrow Down' />
        </div>
      </section>

      <section className='min-h-screen flex flex-col items-center justify-between gap-10 px-5 py-20'>
        <h2 className='text-center header2'>Latest travel stories</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          {latest.map((article, i) => (
            <div
              key={i}
              className='md:w-[370px] h-[460px] p-2.5 bg-background-color1 flex flex-col text-center'
            >
              <img
                className='rounded-3xl min-h-[268px] w-full object-cover'
                src={article.image}
                alt={article.title}
              />
              <div className='flex flex-col h-full justify-center gap-3 p-3.5'>
                <p className='text-paragraph-color4 paragraph3'>
                  {article.date}
                </p>
                <h3 className='header3 text-headline-color1'>
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <Link className='text-textlink' to='/articles'>
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
    </>
  )
}
