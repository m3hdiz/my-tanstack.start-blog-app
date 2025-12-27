// src/serverFns.ts (or wherever you keep them)
import { createServerFn } from '@tanstack/react-start' // if using TanStack Start

export const getFeaturedArticle = createServerFn().handler(async () => {
  // Your server-side fetch logic, e.g., from DB or API
  return {
    title: 'Wild Camping Along Tasmania’s East Coast',
    image: '/home-hero-card.jpg',
    // any other fields you need
  }
})

export const getLatestArticles = createServerFn().handler(async () => {
  return [
    {
      date: 'October 10, 2025',
      title: 'Finding Stillness in the Hills of San Cristóbal',
      image: '/001.jpg',
    },
    {
      date: 'October 2, 2025',
      title: 'Wandering Through the Streets of Rome',
      image: '/002.jpg',
    },
    {
      date: 'September 17, 2025',
      title: 'Driving Across Monument Valley',
      image: '/003.jpg',
    },
    {
      date: 'September 2, 2025',
      title: 'Walking the Terraces of Northern Vietnam',
      image: '/004.jpg',
    },
  ]
})

export const getUpcomingItineraries = createServerFn().handler(async () => {
  return [
    {
      number: '01',
      destination: 'Oaxaca, Mexico',
      dates: 'March 12 - March 25',
      description: 'For mole, markets, and Monte Albán',
      image: '/0001.jpg',
      rounded: false,
    },
    {
      number: '02',
      destination: 'Rome, Italy',
      dates: 'June 9 - June 30',
      description: 'Evening walks and neighborhood trattorias',
      image: '/0002.jpg',
      rounded: true,
    },
    {
      number: '03',
      destination: 'Lofoten, Norway',
      dates: 'October 20 - October 28',
      description: 'Admire Sakurajima from the ferry',
      image: '/0003.jpg',
      rounded: false,
    },
    {
      number: '04',
      destination: 'Kagoshima, Japan',
      dates: 'Dec 3 - Dec 21',
      description: 'Admire Sakurajima from the ferry',
      image: '/0004.jpg',
      rounded: true,
    },
  ]
})
