"use client";
import { usePathname } from 'next/navigation';
import { CATALOGUE } from '@/constants/villa';
import { SlideshowLightbox } from 'lightbox.js-react';
import WAIcon from "../../../../public/globe.svg"

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Links from '@/components/Link';

const CatalogueDetail = () => {
    const pathname = usePathname(); // Mendapatkan path URL
    const slug = pathname.split('/').pop(); // Ambil slug dari URL
    // console.log("Extracted slug:", slug);

    // Cari data katalog berdasarkan slug
    const catalogue = CATALOGUE.find((item) => item.slug === slug);

    if (!catalogue) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold">Catalogue Not Found</h1>
            </div>
        );
    }
    
    // State untuk menyimpan harga terrain yang dipilih
    const [selectedTerrainPrice, setSelectedTerrainPrice] = useState(0);

    // Total harga proyek
    const totalPrice = parseInt(catalogue.price.replace(/\s+/g, "")) + selectedTerrainPrice;
 
    // Fungsi untuk menangani klik terrain
    const handleSelectTerrain = (price: number) => {
        setSelectedTerrainPrice(price);
    };

    // const images = Array.from({ length: 10 }, (_, index) => `${catalogue.img}/img${index + 1}.jpg`);
    const totalImages = Math.min(10, catalogue.totalImages ?? 10);
    const images = Array.from(
      { length: totalImages },
      (_, index) => `${catalogue.img}/img${index + 1}.jpg`
    );

    return (
    <>    
        <div className="sm:h-[60vh] h-[45vh] w-full overflow-hidden">
            <div className="relative h-full w-full overflow-hidden flex justify-center items-center">
                <Image src={catalogue.banner} alt='' height={1000} width={1920} className='h-full object-cover'/>
                <div className="bg-gradient-to-b from-secondary w-full h-full absolute flex flex-col justify-center items-center text-center sm:gap-3">
                    <div className="text-white flex flex-col justify-center items-center gap-3 sm:mb-3">                    
                        <h1 className="capitalize md:text-5xl text-3xl font-semibold tracking-wide">
                            {catalogue.name}                                                  
                        </h1>            
                    </div>
                </div> 
            </div>            
        </div>

        <section className="2xl:w-4/5 w-11/12 2xl:gap-20 md:gap-12 gap-4 sm:py-20 py-10 rounded-lg overflow-hidden m-auto flex flex-col sm:flex-row" >  
            <div className="2xl:basis-1/2 basis-[45%] space-y-4">
                <div className="flex gap-3 xl:text-base text-sm text-slate-500">
                    <h3>/</h3>
                    <h3>RÉALISATIONS</h3>
                </div>
                <h1 className="capitalize xl:text-6xl text-4xl font-medium">{catalogue.name}</h1>
                <p className="xl:text-base text-sm hidden">
                    Cette villa au style bohème offre un espace de vie décloisonné au rez-de-chaussée, avec une cuisine qui s’ouvre sur le salon. Une petite table à manger est judicieusement placée en face de la piscine privée et des jardins tropicaux.

                    La chambre principale, spacieuse avec ses 25 m², comprend une salle de bains luxueuse et des portes-fenêtres coulissantes offrant un accès direct à la piscine.
                    En parlant de la piscine, elle est accessible aussi bien depuis la chambre que depuis le salon extérieur, créant ainsi un lien harmonieux entre l’intérieur et l’extérieur de la villa.                 
                </p>                
                <div className="flex justify-between xl:pt-10 pt-4">
                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="sm:w-[40px] w-[30px]" viewBox="0 0 24 24"><path d="M20 9.557V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.525 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.475-.811-2.75-2-3.443zM18 7v2h-5V7h5zM6 7h5v2H6V7zm14 9H4v-3c0-1.103.897-2 2-2h12c1.103 0 2 .897 2 2v3z"></path></svg>
                        <h3 className="xl:text-2xl text-lg font-medium sm:mt-3">{catalogue.chambre}</h3>
                        <p className="xl:text-sm text-xs">Chambre</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="sm:w-[40px] w-[30px]" viewBox="0 0 24 24"><path d="M21 10H7V7c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S5 4.794 5 7v3H3a1 1 0 0 0-1 1v2c0 2.606 1.674 4.823 4 5.65V22h2v-3h8v3h2v-3.35c2.326-.827 4-3.044 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.206-1.794 4-4 4H8c-2.206 0-4-1.794-4-4v-1h16v1z"></path></svg>                        
                        <h3 className="xl:text-2xl text-lg font-medium sm:mt-3">{catalogue.salle}</h3>
                        <p className="xl:text-sm text-xs">Salle de bain</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="sm:w-[40px] w-[30px]" viewBox="0 0 24 24"><path d="M19 2H9c-1.103 0-2 .897-2 2v5.586l-4.707 4.707A1 1 0 0 0 3 16v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zm-8 18H5v-5.586l3-3 3 3V20zm8 0h-6v-4a.999.999 0 0 0 .707-1.707L9 9.586V4h10v16z"></path><path d="M11 6h2v2h-2zm4 0h2v2h-2zm0 4.031h2V12h-2zM15 14h2v2h-2zm-8 1h2v2H7z"></path></svg>                        
                        <h3 className="xl:text-2xl text-lg font-medium sm:mt-3">{catalogue.habitable} m<sup>2</sup></h3>
                        <p className="xl:text-sm text-xs">Habitable</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="sm:w-[40px] w-[30px]" viewBox="0 0 24 24"><circle cx="19.003" cy="6.002" r="2.002"></circle><path d="M18.875 13.219c-.567.453-.978.781-1.878.781-.899 0-1.288-.311-1.876-.781-.68-.543-1.525-1.219-3.127-1.219-1.601 0-2.445.676-3.124 1.219-.588.47-.975.781-1.875.781-.898 0-1.286-.311-1.873-.78C4.443 12.676 3.6 12 2 12v2c.897 0 1.285.311 1.872.78.679.544 1.523 1.22 3.123 1.22s2.446-.676 3.125-1.22c.587-.47.976-.78 1.874-.78.9 0 1.311.328 1.878.781.679.543 1.524 1.219 3.125 1.219 1.602 0 2.447-.676 3.127-1.219.588-.47.977-.781 1.876-.781v-2c-1.601 0-2.446.676-3.125 1.219zM16.997 19c-.899 0-1.288-.311-1.876-.781-.68-.543-1.525-1.219-3.127-1.219-1.601 0-2.445.676-3.124 1.219-.588.47-.975.781-1.875.781-.898 0-1.286-.311-1.873-.78C4.443 17.676 3.6 17 2 17v2c.897 0 1.285.311 1.872.78.679.544 1.523 1.22 3.123 1.22s2.446-.676 3.125-1.22c.587-.47.976-.78 1.874-.78.9 0 1.311.328 1.878.781.679.543 1.524 1.219 3.125 1.219 1.602 0 2.447-.676 3.127-1.219.588-.47.977-.781 1.876-.781v-2c-1.601 0-2.446.676-3.125 1.219-.567.453-.978.781-1.878.781zM11 5.419l2.104 2.104-2.057 2.57c.286-.056.596-.093.947-.093 1.602 0 2.447.676 3.127 1.219.588.47.977.781 1.876.781.9 0 1.311-.328 1.878-.781.132-.105.274-.217.423-.326l-2.096-2.09.005-.005-5.5-5.5a.999.999 0 0 0-1.414 0l-4 4 1.414 1.414L11 5.419z"></path></svg>
                        <h3 className="xl:text-2xl text-lg font-medium sm:mt-3">{catalogue.piscine} m<sup>2</sup></h3>
                        <p className="xl:text-sm text-xs">Piscine</p>
                    </div>
                </div>
            </div>

            <div className="2xl:basis-1/2 basis-[55%] h-fit">
                <div className="border rounded-md p-5 space-y-2">
                    <div>
                        <h3 className="uppercase text-center">caractéristicques villa</h3>
                        <hr />
                    </div>

                    <div className="text-center">
                        <h3 className="text-[#999] xl:text-base text-sm">Prix de la construction</h3>
                        <h1 className="xl:text-4xl text-3xl font-semibold">{catalogue.price} €</h1>
                    </div>

                    <div className="flex py-2 divide-x-2">
                        <div className="basis-1/2 flex flex-col items-start">
                            <h3 className="text-[#999] xl:text-base text-xs">Qualité de construction</h3>
                            <h1 className="xl:text-xl font-medium flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="xl:w-[24px] w-[18px]" viewBox="0 0 24 24"><path d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"></path></svg>
                                {catalogue.qualite}
                            </h1>
                        </div>
                        
                        <div className="basis-1/2 flex flex-col items-end">
                            <h3 className="text-[#999] xl:text-base text-xs">Temps construction</h3>
                            <h1 className="xl:text-xl font-medium flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="xl:w-[24px] w-[18px]" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path></svg>
                                {catalogue.construction} Mois
                            </h1>
                        </div>
                    </div>

                    <div className="text-center">
                        <h3 className="text-[#999] xl:text-base text-sm">Votre terrain</h3>
                    </div>

                    {/* Pilihan Terrain */}
                    <div className="grid 2xl:grid-cols-5 xl:grid-cols-5 grid-cols-2 gap-2">
                        {Object.entries(catalogue.terrains).map(([key, terrain]) => (
                            <div
                                key={key}
                                className={`terrain space-y-1 border rounded-md text-center py-2 hover:border-primary hover:bg-primary/10 cursor-pointer ${
                                    selectedTerrainPrice === terrain.price
                                        ? "border-primary bg-primary/10"
                                        : ""
                                }`}
                                onClick={() => handleSelectTerrain(terrain.price)}
                            >
                                <h1 className="xl:text-lg font-medium">{terrain.name}</h1>
                                <div className="2xl:text-sm text-xs">
                                    <p>{catalogue.terrain} ARE</p>
                                    <p>Leasehold 30 Y</p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400">À partir de</p>
                                    <h1 className="xl:text-xl font-semibold">{terrain.price.toLocaleString("fr-FR")} €</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Total Harga */}
                <div className="pt-6 space-y-2 text-center">
                    <h3 className="text-[#999] xl:text-lg text-base">Prix du projet</h3>
                    <h1 className="xl:text-6xl text-4xl font-semibold">
                        {totalPrice.toLocaleString("fr-FR")} €
                    </h1>
                    <p className="text-xs text-slate-400">
                        *Hors PTPMA, et Ameublement
                    </p>
                    <div className='flex gap-4'>                
                        <Links
                            title='Calculate'
                            icon=""
                            variant="btn_calculate"
                            href={`/calculate?slug=${catalogue.slug}&terrain=${selectedTerrainPrice}&price=${totalPrice}`}
                        />
                        <Links
                            title='Contact'
                            icon=""
                            variant="btn_whatsapp"
                            target={true}
                            href={`https://wa.me/6285333777710?text=Bonjour, je viens de Balimmo.fr. Je suis intéressé par ce genre de villa : https://balimmo.fr/villa/${catalogue.slug}. Pouvez-vous m'en dire plus svp ?`}
                        />
                    </div>
                </div>
            </div>
        </section>

        <div 
            className="w-full sm:h-[300px] h-[200px]" 
            style={{
                background: `url(${catalogue.banner})`, 
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                }}>
            
            <div className="h-full flex items-end bg-secondary/50  text-white p-10 ">
                {catalogue.denah && (
                <div className='sm:text-base text-sm flex gap-3'>
                    <h3>/</h3>
                    <h3 className="uppercase">Layout Plan</h3>
                </div>
                )}
            </div>
            
        </div>

        {catalogue.denah && (
        <div className="lg:w-3/5 w-11/12 sm:pt-20 pt-10 overflow-hidden m-auto" >
            <Image className="m-auto sm:max-w-[600px] max-w-[250px]" src={catalogue.denah} alt="" width={1000} height={1000} />
        </div>
        )}

        <section className=" 2xl:py-20 py-10 rounded-lg lg:w-full w-11/12 m-auto overflow-hidden">
                <div className="flex gap-3 p-10 sm:text-base text-sm text-slate-500">
                    <h3>/</h3>
                    <h3 className="uppercase">Galerie</h3>
                </div>
            <Swiper
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                
                spaceBetween={10}
                slidesPerView={1}
                breakpoints= {{
                    1440: { slidesPerView: 3, spaceBetween: 50 },
                    1280: { slidesPerView: 3, spaceBetween: 35 },
                    1024: { slidesPerView: 3, spaceBetween: 25 },
                    480: { slidesPerView: 2, spaceBetween: 20 },
                }}
                navigation            
                pagination={{ type: 'progressbar' }}
                scrollbar={{ draggable: true }}
                grabCursor={true}
                // speed={1000}
            >        
            {images.map((image, index) => (      
            <SwiperSlide key={index}>    
                <SlideshowLightbox className="" showThumbnails={true}>
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}    
                    className="object-cover w-full"
                />            
                </SlideshowLightbox>            
            </SwiperSlide>
            ))}
            </Swiper>
        </section>
    </>
    );
};

export default CatalogueDetail;
