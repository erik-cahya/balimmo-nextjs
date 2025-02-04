'use client';
import { REALISATIONS } from '@/constants'

import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React from 'react'
import Title from './Title'
import Link from 'next/link'
import Image from 'next/image'
import Links from './Link';

const Realisations = () => {
  return (
        <section className="h-auto w-full bg-white sm:py-16 py-8 2xl:px-64 xl:px-10 px-5 relative overflow-hidden">   
            <Title 
                pretitle="Balimmo sur-mesure"
                title='Nos <b>RÉALISATIONS</b>'
            />
        
            <Swiper
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                breakpoints= {{
                    1440: {
                        slidesPerView: 3,
                        spaceBetween: 50
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 35
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 25
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                }}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation            
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className=''
            >        
                {REALISATIONS.map((realisations) => ( 
                <SwiperSlide className="bg-white min-w-[350px] overflow-hidden shadow-xl rounded-lg" key={realisations.id}>               
                    <Link href={realisations.slug}>
                        <Image src={realisations.image} alt="" width={500} height={500} className="object-cover h-[250px] w-full object-center" />
                    </Link>
                                        
                    <div className="text-center py-2 text-black">
                        <p className="tracking-widest text-text uppercase sm:text-base text-sm">Villa</p>
                        <h1 className="sm:text-4xl text-2xl font-bold uppercase">{realisations.name}</h1>
                    </div>

                    <div className="flex flex-col px-5 py-3 bg-primary text-black">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <h1 className="text-base font-bold">ROI {realisations.roi}</h1>
                                <p className="italic text-xs">ROI Annuel</p>
                            </div>
                            <div className="flex flex-col items-end">
                                <h1 className="sm:text-base text-sm font-bold text-right">{realisations.rentabilite} Rentabilité NETTE</h1>
                                <p className="italic text-xs text-right">ROI Annuel</p>
                            </div>
                        </div>
                    </div>

                    <div className="px-5 py-3 border-b border-border">
                        <ul className="space-y-1">
                            <li className="flex gap-2 text-slate-600 italic">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-slate-600"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                                {realisations.location}
                            </li>
                            <li className="flex gap-2 text-slate-600 italic">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-slate-600"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                                {realisations.chambres} Chambres
                            </li>
                            <li className="flex gap-2 text-slate-600 italic">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-slate-600"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                                {realisations.salles} Salles de bains
                            </li>
                            <li className="flex gap-2 text-slate-600 italic">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-slate-600"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                                {realisations.terrain} m2
                            </li>
                            <li className="flex gap-2 text-slate-600 italic">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-slate-600"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
                                {realisations.mois} mois
                            </li>
                        </ul>
                    </div>

                    <div className="flex justify-between items-center px-5 py-3">
                        <div className="text-text">
                            <p className="text-xs">À partir de</p>
                            <h1 className="font-bold lg:text-3xl text-2xl">{realisations.price} &euro;</h1>
                        </div>

                        <Links
                            title="Obtenez le catalogue"
                            icon=""
                            href={realisations.slug}
                            variant="btn_catalogue"
                            target={false}
                        />
                    </div>
                
                </SwiperSlide>
                ))}
            </Swiper>
        </section>
  )
}

export default Realisations