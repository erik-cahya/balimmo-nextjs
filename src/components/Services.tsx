import { SERVICES } from '@/constants'
import React from 'react'
import Title from './Title'
import Accent1 from '../../public/image/accent-1.png';
import Accent2 from '../../public/image/accent-2.png';
import Image from 'next/image';

const Services = () => {
  return (
        <section className="h-auto w-full bg-secondary md:py-16 py-8 2xl:px-80 xl:px-10 px-5 relative overflow-hidden">
            <Image src={Accent1} className="absolute -left-40 opacity-20" alt="" />
            <Image src={Accent2} className="absolute -right-60 -top-40 opacity-20" alt="" />
            <Title 
                pretitle="services balimmo"
                title='<span class="text-white"><b>Un service de</b> <span class="text-primary">A</span> à <span class="text-primary">Z</span></span>'
            />

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-6 gap-0 sm:space-y-0 space-y-5">
                {SERVICES.map((services) => (
                <div className="flex flex-col items-start gap-3 border border-primary text-white py-5 px-4 rounded-md" key={services.id}>
                    <img src={services.image} alt="" className="md:h-[60px] h-[45px]" />
                    <h1 className="sm:text-xl text-lg font-extralight uppercase text-primary"><b>{services.title}</b> {services.secondtitle}</h1>                    
                    <ul className="text-sm list-disc list-inside" dangerouslySetInnerHTML={{ __html: services.list }}>
                        
                    </ul>
                </div>
                ))};
            </div>

        </section>
  )
}

export default Services