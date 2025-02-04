import Image from 'next/image';
import EbookCover from '../../public/image/cover.png';
import Accent1 from '../../public/image/accent-1.png';
import Accent2 from '../../public/image/accent-2.png';
import Links from './Link';

const Ebook = () => {
  return (
    <section className="bg-secondary w-full h-auto text-white flex flex-col sm:flex-row items-center gap-10 sm:py-16 py-8 2xl:px-64 xl:px-10 px-5 relative overflow-hidden">
        <Image src={Accent1} className="absolute left-0 -top-20 opacity-20" alt="" />
        <Image src={Accent2} className="absolute -right-40 top-0 opacity-20" alt="" />

        <div className="flex flex-col basis-3/5 md:gap-5 gap-3 z-10 justify-center items-center"> 
            <h1 className="2xl:text-6xl xl:text-5xl md:text-4xl text-2xl text-white font-medium md:mb-3 text-center"><span className="text-primary">EBOOK GRATUIT :</span> Devenir propriétaire à Bali </h1>
            <h3 className="lg:text-2xl md:text-xl text-center">Votre guide pour comprendre les subtilités du marché de BALI </h3>
            <p className="text-gray-300 md:text-base text-sm font-light text-center">
                Ce guide vous offre une vision complète : tout savoir sur les réglementations locales, les meilleures zones où investir, avec une étude de cas réelle et une FAQ détaillée pour répondre à toutes vos questions. 
                Tout ce qu'il vous faut pour réussir votre investissement à Bali.
            </p>
            <Links
                title="Téléchargez votre guide gratuit maintenant !"
                icon=""
                href="https://www.balimmo.vip/ebook2025"
                target={true}
                variant="btn_primary"
            />
        </div>

        <div className="z-10 basis-2/5">
            <Image src={EbookCover} alt="" className="2xl:w-[500px] lg:w-[400px]" />
        </div>
    </section>
  )
}

export default Ebook