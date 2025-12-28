import { motion } from 'framer-motion'
import { Image as OptimisedImg } from '@unpic/react'

interface FeaturedArticle {
  image: string
  title: string
  alt?: string
}

interface FeaturedArticleCardProps {
  featured: FeaturedArticle
  className?: string
}

const FeaturedArticleCard: React.FC<FeaturedArticleCardProps> = ({
  featured,
  className = '',
}) => {
  const altText = featured.alt || featured.title

  return (
    <motion.div
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      className={`w-[370px] h-[460px] p-2.5 bg-background-color1 flex flex-col text-center hover:cursor-pointer ${className}`}
    >
      <OptimisedImg
        src={featured.image}
        alt={altText}
        width={370}
        height={268}
        layout='constrained'
        className='rounded-3xl h-[268px] w-full object-cover'
        priority={true}
        background='auto'
      />

      <div className='flex flex-col h-full justify-center gap-3 p-3.5'>
        <p className='text-paragraph-color4 paragraph3'>Featured article</p>
        <h3 className='header3 text-headline-color1'>{featured.title}</h3>
      </div>
    </motion.div>
  )
}

export default FeaturedArticleCard
