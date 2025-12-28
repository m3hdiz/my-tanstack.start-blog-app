import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'

export const fetchLocation = createServerFn({ method: 'GET' }).handler(
  async () => {
    console.info('Fetching location...')

    // Add a 5000ms delay
    await new Promise((resolve) => setTimeout(resolve, 5000))

    return {
      location: 'Dallol, Ethiopia',
      coordinates: '14.2417° N',
      temperature: '42°F',
      icon: {
        src: '/Globe icon.svg',
        alt: 'Globe icon',
      },
    }
  },
)

export const locationQueryOptions = () =>
  queryOptions({
    queryKey: ['location'],
    queryFn: () => fetchLocation(),
  })
