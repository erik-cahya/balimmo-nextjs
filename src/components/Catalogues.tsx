'use client';
import { CATALOGUE } from '@/constants/villa'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Links from './Link'

const FILTERS = [
    { label: "Voir tout", value: "all" },
    { label: "1 Chambre", value: "1" },
    { label: "2 Chambres", value: "2" },
    { label: "3 Chambres", value: "3" },
    { label: "4 Chambres", value: "4" },
    { label: "6 Chambres", value: "6" },
  ];

const Catalogues = () => {
    const [selectedFilter, setSelectedFilter] = useState("all");
    const filteredCatalogue =
    selectedFilter === "all"
      ? CATALOGUE
      : CATALOGUE.filter((item) => Number(item.chambre) === Number(selectedFilter));
  return (
    <section className="2xl:w-4/5 w-11/12 py-8 gap-20 rounded-lg m-auto" >

        <div className="m-auto w-fit text-center flex gap-4 item-center overflow-y-auto text-sm mb-8 py-4">
            {FILTERS.map((filter) => (
            <button
                key={filter.value}
                className={`font-poppins px-4 py-3 rounded-md transition-all  ${
                selectedFilter === filter.value ? "bg-secondary text-white" : "bg-gray-100 hover:bg-slate-300"
                }`}
                onClick={() => setSelectedFilter(filter.value)}
            >
                {filter.label}
            </button>
            ))}
        </div>
        
        <div className="grid xl:grid-cols-3 md:grid-cols-2 2xl:gap-10 gap-5">
            {filteredCatalogue.map((catalogue) => (         
                <Link 
                    href={`/catalogue/${catalogue.slug}`} // URL dinamis berdasarkan slug
                    key={catalogue.id} 
                    className="h-[350px] w-full rounded-lg overflow-hidden shadow-xl relative group"  
                    target=''         
                >                
                    <Image src={catalogue?.banner} alt="" width={1000} height={1000} className="scale-110 w-full h-full object-cover group-hover:scale-100 transition-all duration-500"/>                
                    <div className="absolute sm:-bottom-12 group-hover:bottom-0 bottom-0 transition-all duration-500 w-full bg-gradient-to-t from-secondary from-10% text-white py-2 flex flex-col items-center">
                        <h1 className="text-2xl text-center font-medium">{catalogue.name}</h1>
                        <div className=''>
                            <p className="text-center text-sm italic">À partir de </p>
                            <h1 className="text-3xl text-center font-semibold pb-2">{catalogue?.price} €</h1>
                            <Links
                                title="En savoir plus"
                                icon=""
                                href={`/catalogue/${catalogue.slug}`}
                                variant="btn_terrain"
                                target={false}
                            />
                        </div>                        
                    </div>
                </Link>                
            ))}
        </div>
    </section>
  )
}

export default Catalogues