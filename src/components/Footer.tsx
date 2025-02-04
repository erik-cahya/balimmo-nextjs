import Image from 'next/image';
import Logo from '../../public/image/logo.svg';
import { useState } from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-secondary pt-10 px-10">
        <div className="grid lg:grid-cols-3 border-y border-[#636363] divide-x-0 lg:divide-x divide-y lg:divide-y-0  divide-[#636363]">
            <div className="p-5">
                <Image src={Logo} alt="" width={500} height={500} className="w-[300px] -ml-3 mb-4" />
                <p className="text-white sm:text-base text-sm">Basée à Canggu, Balimmo est une entreprise Française spécialisée dans la 
                    conception et la vente de villas sur l’île de Bali.</p>
            </div>

            <div className="px-5 py-8">
                <h1 className="text-white sm:text-4xl text-xl mb-8">Liens Rapides</h1>
                <div className="grid grid-cols-2 gap-4 sm:text-base text-xs">
                    <a href="index.html" className="flex items-center text-white hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M12 5c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path><path d="M12 9c-1.627 0-3 1.373-3 3s1.373 3 3 3 3-1.373 3-3-1.373-3-3-3z"></path></svg>
                        Accueil
                    </a>
                    <a href="terrain.html" className="flex items-center text-white hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M12 5c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path><path d="M12 9c-1.627 0-3 1.373-3 3s1.373 3 3 3 3-1.373 3-3-1.373-3-3-3z"></path></svg>
                        Terrains
                    </a>
                    <a href="catalogue.html" className="flex items-center text-white hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M12 5c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path><path d="M12 9c-1.627 0-3 1.373-3 3s1.373 3 3 3 3-1.373 3-3-1.373-3-3-3z"></path></svg>
                        Catalogue
                    </a>
                    <a href="service.html" className="flex items-center text-white hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M12 5c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path><path d="M12 9c-1.627 0-3 1.373-3 3s1.373 3 3 3 3-1.373 3-3-1.373-3-3-3z"></path></svg>
                        Nos Services
                    </a>
                    <a href="investissement_partage.html" className="flex items-center text-white hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M12 5c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path><path d="M12 9c-1.627 0-3 1.373-3 3s1.373 3 3 3 3-1.373 3-3-1.373-3-3-3z"></path></svg>
                        Investissement
                    </a>
                    <a href="contact.html" className="flex items-center text-white hover:underline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M12 5c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path><path d="M12 9c-1.627 0-3 1.373-3 3s1.373 3 3 3 3-1.373 3-3-1.373-3-3-3z"></path></svg>
                        Contact
                    </a>
                </div>
            </div>

            <div className="px-5 py-8">
                <h1 className="text-white sm:text-4xl text-xl mb-8">Newsletters</h1>
          
                {/* <form
                    name="newsletters"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    className="lg:max-w-sm space-y-3"
                >
                    <input type="hidden" name="form-name" value="newsletters" />                
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-[#ddd]">
                                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                            </svg>
                        </div>                        
                        <input 
                            type="email" 
                            name="newsletter"                     
                            className="bg-white bg-opacity-10 text-white text-sm rounded-xl block w-full ps-12 p-4 outline-none"  
                            placeholder="Entrez votre adresse email ..." 
                            required 
                        />
                    </div>

                    <button type="submit" className="text-white bg-primary sm:px-5 sm:py-3 px-3 py-2 rounded-xl sm:text-base text-sm w-full cursor-pointer">
                        Enregistrer
                    </button>

                </form> */}
                
            </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-3 justify-between items-center py-3">
            <div className="flex sm:flex-row flex-col text-center gap-2 text-white">
                <p className="sm:text-base text-sm">PT BALIMMO DEVELOPMENT GROUP © 2021 - 2025. All rights reserved</p>
                <div className="sm:block hidden">|</div>
                <a href="mentions-legales.html" className="underline hover:text-primary sm:text-base text-sm">Mentions légales</a>
            </div>

            <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/people/Balimmo/61557243686168/" target="_blank" className="border border-white sm:w-[50px] sm:h-[50px] w-[35px] h-[35px] flex items-center justify-center rounded hover:bg-primary hover:border-primary transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-white sm:w-[24px] sm:h-[24px] w-[16px] h-[16px]" viewBox="0 0 24 24"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                </a>

                <a href="https://www.instagram.com/balimmo_villa/?igsh=MXJhY2xkMXBnaGplbA%3D%3D#" target="_blank" className="border border-white sm:w-[50px] sm:h-[50px] w-[35px] h-[35px] flex items-center justify-center rounded hover:bg-primary hover:border-primary transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-white sm:w-[24px] sm:h-[24px] w-[16px] h-[16px]" viewBox="0 0 24 24"><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path></svg>
                </a>

                <a href="https://www.tiktok.com/@balimmo?_t=8losSwiYXXW&_r=1" target="_blank" className="border border-white sm:w-[50px] sm:h-[50px] w-[35px] h-[35px] flex items-center justify-center rounded hover:bg-primary hover:border-primary transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-white sm:w-[24px] sm:h-[24px] w-[16px] h-[16px]" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path></svg>
                </a>                  
                
                <a href="https://www.youtube.com/@Balimmo_villa" target="_blank" className="border border-white sm:w-[50px] sm:h-[50px] w-[35px] h-[35px] flex items-center justify-center rounded hover:bg-primary hover:border-primary transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-white sm:w-[24px] sm:h-[24px] w-[16px] h-[16px]"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path></svg>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer