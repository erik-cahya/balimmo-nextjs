import Image from 'next/image'
import React from 'react'
import Links from './Link'
import { FITURES } from '@/constants'

const HomeBanner = () => {
  return (
    <section className='flex flex-col'>
        <div className="md:h-screen h-[80vh] w-full overflow-hidden">
            <div className="relative 2xl:h-[80%] h-full w-full bg-cover overflow-hidden flex justify-center items-center sm:rounded-b-[150px] rounded-b-[50px]"> 
                <Image src="/image/accueil.jpg" alt='' className='object-cover h-full' height={1000} width={1920}/>
                {/* <video src="video/bg-video.mp4" muted autoPlay className="sm:w-screen w-auto max-w-[1200px] sm:max-w-full"></video> */}
                <div className="bg-gradient-to-b from-secondary w-full h-full absolute flex flex-col justify-center items-center text-center sm:gap-3">
                    <div className="text-white flex flex-col justify-center items-center mb-3">
                        <h1 className="md:text-6xl sm:text-4xl text-3xl font-extralight tracking-wide px-4 uppercase">
                            <b>Investissez à Bali avec des </b><br/> villas sur-mesure et obtenez                                                           
                        </h1>
                        <p className="text-white md:text-2xl sm:text-xl text-base sm:mb-5 font-medium shadow-md">Jusqu'à 20% de rentabilité brute garantie ! </p>
                    </div>
                </div> 
            </div>            
        </div> 

        <div className="2xl:w-4/5 w-11/12 h-full m-auto rounded-3xl p-1 left-0 right-0 2xl:-mt-[325px] sm:-mt-[145px] -mt-[200px] z-10 ">
            <div className="bg-secondary h-full w-full rounded-2xl grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-0 gap-4 md:divide-x sm:divide-y-0 divide-x-0 divide-y divide-slate-600 p-2 outline outline-offset-8 2xl:outline-4 outline-2 outline-primary">
            {FITURES.map((fitures) => (                    
                <div className="text-center flex flex-col items-center justify-center gap-3 2xl:p-4 p-3" key={fitures.id}>
                    <Image className="" src={fitures.image} width={50} height={50} alt={fitures.title} />
                    <h3 className="text-white 2xl:text-xl text-base font-semibold uppercase 2xl:leading-6 leading-5" dangerouslySetInnerHTML={{ __html: fitures.title }}></h3>
                    <p className="text-white text-sm">{fitures.description}</p>
                    <Links
                        title={fitures.button}
                        icon=""
                        variant="btn_fitures"
                        href={fitures.href}
                        target={false}
                    />
                </div>
             ))}

            
            </div>
        </div>
    </section>
  )
}

export default HomeBanner