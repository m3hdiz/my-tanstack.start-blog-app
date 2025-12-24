import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <>
      <section className='bg-[url(/home-hero-bg.jpg)] bg-fixed bg-bottom-left bg-no-repeat bg-cover min-h-screen flex flex-col items-center justify-between'>
        {/* needed to add an empty div here to make the layout work properly */}
        <div></div>
        <div className='w-[370px] h-[460px] p-2.5 bg-background-color1 flex flex-col text-center'>
          <img
            className='rounded-3xl h-[268px] w-full object-cover'
            src='/home-hero-card.jpg'
            alt='Wild Camping Along Tasmania’s East Coast'
          />
          <div className='flex flex-col h-full justify-center gap-3 p-3.5'>
            <p className='text-paragraph-color4 paragraph3'>Featured article</p>
            <h3 className='header3 text-headline-color1'>
              Wild Camping Along <br /> Tasmania’s East Coast
            </h3>
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
          <div className='md:w-[370px] h-[460px] p-2.5 bg-background-color1 flex flex-col text-center'>
            <img
              className='rounded-3xl min-h-[268px] w-full object-cover'
              src='/001.jpg'
              alt='Wild Camping Along Tasmania’s East Coast'
            />
            <div className='flex flex-col h-full justify-center gap-3 p-3.5'>
              <p className='text-paragraph-color4 paragraph3'>
                October 10, 2025
              </p>
              <h3 className='header3 text-headline-color1'>
                Finding Stillness in the Hills of San Cristóbal
              </h3>
            </div>
          </div>
          <div className='md:w-[370px] h-[460px] p-2.5 bg-background-color1 flex flex-col text-center'>
            <img
              className='rounded-3xl min-h-[268px] w-full object-cover'
              src='/002.jpg'
              alt='Wild Camping Along Tasmania’s East Coast'
            />
            <div className='flex flex-col h-full justify-center gap-3 p-3.5'>
              <p className='text-paragraph-color4 paragraph3'>
                October 2, 2025
              </p>
              <h3 className='header3 text-headline-color1'>
                Wandering Through the Streets of Rome
              </h3>
            </div>
          </div>
          <div className='md:w-[370px] h-[460px] p-2.5 bg-background-color1 flex flex-col text-center'>
            <img
              className='rounded-3xl min-h-[268px] w-full object-cover'
              src='/003.jpg'
              alt='Wild Camping Along Tasmania’s East Coast'
            />
            <div className='flex flex-col h-full justify-center gap-3 p-3.5'>
              <p className='text-paragraph-color4 paragraph3'>
                September 17, 2025
              </p>
              <h3 className='header3 text-headline-color1'>
                Driving Across Monument Valley
              </h3>
            </div>
          </div>
          <div className='md:w-[370px] h-[460px] p-2.5 bg-background-color1 flex flex-col text-center'>
            <img
              className='rounded-3xl min-h-[268px] w-full object-cover'
              src='/004.jpg'
              alt='Wild Camping Along Tasmania’s East Coast'
            />
            <div className='flex flex-col h-full justify-center gap-3 p-3.5'>
              <p className='text-paragraph-color4 paragraph3'>
                September 2, 2025
              </p>
              <h3 className='header3 text-headline-color1'>
                Walking the Terraces of Northern Vietnam
              </h3>
            </div>
          </div>
        </div>
        <Link className='text-textlink' to='/articles'>
          View all articles
        </Link>
      </section>
      <section className='bg-background-color4 text-headline-color3 py-20 px-5 flex flex-col items-center gap-10'>
        <h2 className='text-center header2'>Upcoming itinerary</h2>
        <div className='w-full last:border-b last:border-dashed'>
          <div className='flex justify-between border-t border-dashed gap-5 py-[14.5px] w-full'>
            <h1 className='flex flex-col justify-center text-display w-[144px]'>
              01
            </h1>
            <div className='flex-1 flex flex-col justify-center'>
              <h3 className='header3'>Oaxaca, Mexico</h3>
              <p>
                March 12 - March 25 <br />
                For mole, markets, and Monte Albán
              </p>
            </div>
            <img className='w-[230px] max-sm:hidden' src='/0001.jpg' alt='' />
          </div>
          <div className='flex justify-between border-t border-dashed gap-5 py-[14.5px] w-full'>
            <h1 className='flex flex-col justify-center text-display w-[144px]'>
              02
            </h1>
            <div className='flex-1 flex flex-col justify-center'>
              <h3 className='header3'>Rome, Italy</h3>
              <p>
                June 9 - June 30
                <br />
                Evening walks and neighborhood trattorias
              </p>
            </div>
            <img
              className='w-[230px] rounded-full max-sm:hidden'
              src='/0002.jpg'
              alt=''
            />
          </div>
          <div className='flex justify-between border-t border-dashed gap-5 py-[14.5px] w-full'>
            <h1 className='flex flex-col justify-center text-display w-[144px]'>
              03
            </h1>
            <div className='flex-1 flex flex-col justify-center'>
              <h3 className='header3'>Lofoten, Norway</h3>
              <p>
                October 20 - October 28
                <br />
                Admire Sakurajima from the ferry
              </p>
            </div>
            <img className='w-[230px] max-sm:hidden' src='/0003.jpg' alt='' />
          </div>
          <div className='flex justify-between border-t border-dashed gap-5 py-[14.5px] w-full'>
            <h1 className='flex flex-col justify-center text-display w-[144px]'>
              04
            </h1>
            <div className='flex-1 flex flex-col justify-center'>
              <h3 className='header3'>Kagoshima, Japan</h3>
              <p>
                Dec 3 - Dec 21
                <br />
                Admire Sakurajima from the ferry
              </p>
            </div>
            <img
              className='w-[230px] rounded-full max-sm:hidden'
              src='/0004.jpg'
              alt=''
            />
          </div>
        </div>
      </section>
    </>
  )
}
