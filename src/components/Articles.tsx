import React from 'react'
import Title from './Title'
import Image from 'next/image'
import { ARTICLE } from '@/constants/article'

const Articles = () => {
  return (
    <section className="h-auto w-full sm:py-16 py-8 2xl:px-64 xl:px-10 px-5 m-auto">
      <Title
          pretitle="articles"
          title='Bali dans les <b>médias</b>'
      />

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-10 gap-4">
        {ARTICLE.map((article) => (
        <div key={article.id} className="rounded-md text-center flex flex-col items-center gap-2 border border-secondary text-secondary sm:p-5 py-4 px-2 hover:bg-secondary hover:text-white transition-all duration-500">
            <Image src={article.image} width={500} height={200} alt="" className="md:h-[80px] h-[60px] w-fit" />
            <h1 className="md:text-2xl text-xl font-bold uppercase">{article.title}</h1>
            <p className="md:text-base text-sm">{article.text}</p>
        </div>     
        ))}
      </div>

    </section>
  )
}

export default Articles