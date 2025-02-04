import Banner from '@/components/Banner'
import Accent1 from '/public/image/accent-1.png';
import Accent2 from '/public/image/accent-2.png';
import Image from 'next/image';
import { SERVICES } from '@/constants';
import Title from '@/components/Title';

const page = () => {
  return (
    <>
        <Banner />
        <section className="2xl:w-4/5 w-11/12 xl:py-20 py-10 gap-20 rounded-lg overflow-hidden m-auto" >      
            <div className="grid sm:grid-cols-2 sm:gap-20 gap-4">
                <div className="">
                    <h1 className="2xl:text-6xl xl:text-5xl md:text-4xl text-2xl uppercase text-secondary font-semibold wow fadeInDown" data-wow-delay=".5s">Introduction</h1>
                    <p className="mt-4">
                        Basée à Canggu, Balimmo est une entreprise Française spécialisée dans la 
                        conception et la vente de villas sur l’île de Bali. Depuis notre création, nous
                        avons mené à bien de nombreux projets dans la région Ouest de Bali.
                    </p>
                </div>
                <div className="">
                    <img src="image/services/service.jpg" alt="" />
                </div>
            </div>
        </section>

        <section className="bg-secondary w-full m-auto relative overflow-hidden">  
            <Image src={Accent1} className="absolute -left-40 opacity-20" alt="" />
            <Image src={Accent2} className="absolute -right-60 -top-40 opacity-20" alt="" />
            <div className="h-auto 2xl:w-4/5 w-11/12 xl:py-20 py-10 m-auto gap-20 z-10">

            <Title
                pretitle="services balimmo"
                title='<span class="text-white"><b>Un service de <span class="text-primary">A</span> à <span class="text-primary">Z</span> conçu pour vous</b></span>'
            />

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-6 gap-0 sm:space-y-0 space-y-5">
                {SERVICES.map((services) => (
                <div className="flex flex-col items-start gap-3 border border-primary text-white py-5 px-4 rounded-md" key={services.id}>
                    <img src={services.image} alt="" className="md:h-[60px] h-[45px]" />
                    <h1 className="text-lg text-white" dangerouslySetInnerHTML={{ __html: services.titleServices }}></h1>                    
                    <ul className="text-sm list-disc list-inside" dangerouslySetInnerHTML={{ __html: services.list }}>
                        
                    </ul>
                </div>
                ))};
            </div>
            </div>

        </section>
    </>
  )
}

export default page