import { motion } from 'framer-motion'
import { Image as OptimisedImg } from '@unpic/react'

interface Article {
  image: string
  title: string
  date: string
  alt?: string
}

interface LatestArticlesCardProps {
  articles: Article[]
  className?: string
}

const LatestArticlesCard: React.FC<LatestArticlesCardProps> = ({
  articles,
  className = '',
}) => {
  return (
    <>
      {articles.map((article, index) => {
        const altText = article.alt || article.title

        return (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            key={index}
            className={`md:w-[370px] h-[460px] p-2.5 bg-background-color1 flex flex-col text-center hover:cursor-pointer ${className}`}
          >
            <OptimisedImg
              src={article.image}
              alt={altText}
              width={370}
              height={268}
              layout='constrained'
              className='rounded-3xl h-[268px] w-full object-cover'
              priority={true}
              background='auto'
            />
            <div className='flex flex-col h-full justify-center gap-3 p-3.5'>
              <p className='text-paragraph-color4 paragraph3'>{article.date}</p>
              <h3 className='header3 text-headline-color1'>{article.title}</h3>
            </div>
          </motion.div>
        )
      })}
    </>
  )
}

export default LatestArticlesCard
