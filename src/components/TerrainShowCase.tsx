'use client';
import { TERRAIN } from '@/constants/terrain'
import Image from 'next/image'
import React from 'react'
import Title from './Title'
import Icon from '../../public/image/icon/location.png'

import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { OURTEAM } from '@/constants/ourteam';
import Links from './Link';
import Badge from './Badge';

const TerrainShowCase = () => {
  return (
    <section className="h-auto w-full sm:py-16 py-8 2xl:px-64 xl:px-10 px-5 m-auto bg-background">
        <Title
            pretitle="terrains"
            title='Nos terrains <b>disponibles</b>'
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
            navigation            
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className=''
        >        
                
        {TERRAIN.slice(0,6).map((terrain, index) => (
        <SwiperSlide className="relative object-cover h-[350px] w-full overflow-hidden rounded-lg" key={terrain.id}>
            <Image src={terrain.image1} alt='' width={500} height={500} className='object-cover w-full h-[350px]'/>
            <div className="bg-gradient-to-t from-secondary from-5% w-full h-[110px] transition-all duration-500 absolute bottom-0 flex flex-col justify-evenly text-white py-5 px-6 space-y-2  hover:h-full">
                <div>
                    <Image src={Icon} alt="" className="sm:w-[30px] w-[25px]" />
                    <div className="flex items-center justify-between pb-5">
                        <h1 className="text-lg">{terrain.name} {terrain.size} ARE</h1>
                        <Badge 
                            title={`${terrain.price}M/ARE`}
                            variant='small-badge'                        
                        />
                    </div>
                </div>
                <div className="sm:text-base text-sm">
                    Infos essentielles terrain {terrain.size} ARE :
                    <ul className='space-y-2 list-disc list-inside'>
                        <li>{terrain.name}</li>
                        <li>{terrain.size} ARE / {Math.round(Number(terrain.size) * 100)}m<sup>2</sup></li>
                        <li>{terrain.price}M/ARE</li>
                        <li>{terrain.time}</li>
                        <li>Zone {terrain.size}</li>
                    </ul>
                </div>
            </div>                                                 
        </SwiperSlide>
        ))}
        </Swiper>

        <Links
            title="Voir les terrains disponibles"
            icon=""
            href="https://www.balimmo.vip/ebook2025"
            target={true}
            variant="btn_primary"
        />
    </section>
  )
}
export default TerrainShowCase