"use client";
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import { usePathname } from "next/navigation";

const Banner = () => {
    const pathname = usePathname(); // Dapatkan URL saat ini
    const currentPage = NAV_LINKS.find((link) => link.href === pathname); // Temukan data sesuai halaman

    // Jika tidak ada halaman yang cocok, tampilkan fallback
    if (!currentPage) {
        return null;
    }
  return (
    <section className="sm:h-[60vh] h-[45vh] w-full overflow-hidden">
        {NAV_LINKS.map((link) => (          
        
        <div className="relative h-full w-full overflow-hidden flex justify-center items-center" key={link.key}>
            <Image
                src={`/image/${currentPage.label.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                alt={currentPage.label}
                height={1000}
                width={1920}
                className="h-full object-cover"
            />
            <div className="bg-gradient-to-b from-secondary w-full h-full absolute flex flex-col justify-center items-center text-center sm:gap-3">
                <div className="text-white flex flex-col justify-center items-center gap-3">                    
                    <h1 className="capitalize md:text-5xl text-3xl font-semibold tracking-wide">
                    {currentPage.title}                                                 
                    </h1>            
                </div>
            </div> 
        </div>  
        ))}          
    </section>
  )
}

export default Banner