"use client";

import { useState, useRef, useEffect } from "react";
import Banner from '@/components/Banner'
import Link from "next/link";

const page = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [triggerValue, setTriggerValue] = useState<string>("");
    const [formAction, setFormAction] = useState<string>("");

    const hiddenInputRef = useRef<HTMLInputElement | null>(null);
    const dynamicFormRef = useRef<HTMLFormElement | null>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);

    // Function to handle button clicks
    const handleButtonClick = (value: string, action: string) => {
        console.log("Button clicked:", value, action); // Debugging log

        setTriggerValue(value);
        setFormAction(action);
        setIsVisible(true); // Show modal
    };


    // Function to close the modal
    const closeModal = () => {
        console.log("Hide button clicked"); // Debugging log
        setIsVisible(false);
    };

    // Close modal if clicked outside the white box
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.querySelector(".bg-white")?.contains(event.target as Node)
            ) {
                console.log("Clicked outside the form"); // Debugging log
                closeModal();
            }
        };

        if (isVisible) {
            document.addEventListener("click", handleOutsideClick);
        } else {
            document.removeEventListener("click", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [isVisible]);

  return (
    <>
        <Banner />
        {isVisible && (
        <div ref={modalRef} className="bg-secondary/50 fixed left-0 right-0 top-0 bottom-0 z-50 items-center flex">
            <div className="bg-white max-w-[500px] sm:w-1/2 w-full m-5 sm:m-auto p-5 flex flex-col gap-5 rounded-xl shadow-lg md:h-auto h-fit overflow-hidden">
                <div className="flex justify-between border-b border-slate-200 pb-5">
                    <h1 className="text-xl">Télécharger</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="hideProfile"
                        className="cursor-pointer hover:fill-red-600">
                        <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                    </svg>
                </div>
        
                <form 
                    ref={dynamicFormRef}
                    id="dynamicForm"
                    action={formAction}
                    method="POST"
                    data-netlify="true"
                    name="investissement-form"
                    className="flex flex-col gap-4 border-b border-slate-200 pb-5">
        
                    
                    <div className="relative">
                        <input required type="text" id="nom" name="nom"
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " />
                        <label htmlFor="nom"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                            Nom
                        </label>
                    </div>
                    <input type="hidden" id="hiddenInput" name="triggerValue" value={triggerValue} />
                    <p className="hidden">
                        <label>Jangan diisi: <input name="bot-field" /></label>
                    </p>
        
                    <div className="relative">
                        <input required type="text" id="telephone" name="telephone"
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " />
                        <label htmlFor="telephone"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                            Téléphone
                        </label>
                    </div>
        
                    <div className="relative">
                        <input required type="email" id="email" name="email"
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " />
                        <label htmlFor="email"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                            Email
                        </label>
                    </div>
        
                    <div className="flex items-center gap-1">
                        <input type="checkbox" id="terms" name="terms" required />
                        <label htmlFor="terms" className="text-xs cursor-pointer">
                            En cochant cette case, vous acceptez notre politique de confidentialité
                        </label>
                    </div>
        
                    <button className="flex items-center justify-center text-center bg-secondary text-white px-3 py-3 gap-2 text-sm rounded-md hover:bg-slate-500">
                        Enregistrer
                    </button>
                </form>
            </div>
        </div>  
        )} 

        <section className="w-11/12 2xl:px-20 xl:py-20 py-10 gap-20 rounded-lg overflow-hidden m-auto" >  
            
            <div className="flex flex-col items-center justify-center gap-10 mb-20">

                <div className="flex flex-col items-center text-center justify-center gap-5 border-b pb-8">
                    <h1 className="md:text-5xl text-3xl font-semibold text-secondary text-center">Rejoignez le Club Privé des Investisseurs BALIMMO</h1>
                    <div className="flex sm:flex-row flex-col items-center gap-4">
                        <div>
                            <p className="md:text-2xl text-xl font-semibold text-secondary">Cliquez ici pour accéder au groupe WhatsApp exclusif où vous découvrirez :</p>
                            <ul className="list-disc list-outside md:text-xl flex items-center flex-col justify-center">
                                <li>Des conseils d'experts pour l'investissement partagé.</li>
                                <li>Des annonces de conférences et de webinaires.</li>
                                <li>Des vidéos de terrain et des astuces exclusives sur l'investissement à Bali et bien plus </li>
                            </ul>
                        </div>
                        <img src="/image/investment/barcode.jpeg" alt="" className="w-[250px] rounded-lg" />
                    </div>
                    <a 
                        target="_blank" 
                        className="px-12 py-3 sm:text-xl text-base bg-[#49ad39] text-white flex items-center text-center rounded-md hover:bg-secondary transition-all z-10" 
                        href="https://chat.whatsapp.com/EvDfxpCo9rH8EmFO539iyB"> 
                            <svg xmlns="http://www.w3.org/2000/svg"  className="fill-white w-[36px]" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path></svg>                    
                            Whatsapp
                    </a>
                </div>
                
                <h1 className="md:text-5xl text-3xl text-center font-semibold text-secondary mb-4">Projets Disponibles en Investissement Partagé :</h1>

                <div className="flex sm:flex-row flex-col 2xl:gap-16 sm:gap-8 gap-12 justify-center sm:items-start items-center w-full text-center">
                    <div className="">
                     
                        <img src="/image/investment/sapphire.png" alt="" className="w-full m-auto" />
                        
                        <div className="flex flex-col gap-3 mt-4">
                            <button 
                                onClick={() => handleButtonClick("replay_sapphire", "https://youtu.be/vy-1ebPEw2A")}
                                data-value="replay_sapphire" data-action="https://youtu.be/vy-1ebPEw2A"
                                className="trigger-button w-[200px] sm:text-base text-sm m-auto flex flex-col items-center justify-center text-center bg-secondary border-4 border-primary text-primary font-semibold rounded-full py-3 px-6 hover:bg-primary hover:text-secondary transition-all">
                                Replay
                            </button>      
                            <button 
                                onClick={() => handleButtonClick("pdf_sapphire", "https://balimmo.fr/Investissement_Partage_Sapphire.pdf")}
                                data-value="pdf_sapphire" data-action="https://balimmo.fr/Investissement_Partage_Sapphire.pdf"
                                className="trigger-button w-fit sm:text-base text-sm m-auto flex flex-col items-center justify-center text-center bg-secondary border-4 border-primary text-primary font-semibold rounded-full py-3 px-6 hover:bg-primary hover:text-secondary transition-all">
                                Télécharger la Présentation PDF
                            </button>
                            <Link href="https://sapphire.balimmo.fr " target="_blank" 
                                className="w-fit m-auto sm:text-base text-sm flex flex-col items-center justify-center text-center bg-secondary border-4 border-primary text-primary font-semibold rounded-full py-3 px-6 hover:bg-primary hover:text-secondary transition-all">
                                Achetez des Parts de SAPPHIRE
                            </Link>
                        </div>
                    </div>

                    <div className="">
                        
                        <img src="/image/investment/corail.png" alt="" className="w-full m-auto" />
                        <div className="flex flex-col gap-3 mt-4">
                            <button 
                                onClick={() => handleButtonClick("replay_corail", "https://youtu.be/vy-1ebPEw2A")}
                                data-value="replay_corail" data-action="https://youtu.be/vy-1ebPEw2A"
                                className="trigger-button w-[200px] sm:text-base text-sm m-auto flex flex-col items-center justify-center text-center bg-secondary border-4 border-primary text-primary font-semibold rounded-full py-3 px-6 hover:bg-primary hover:text-secondary transition-all">
                                Replay
                            </button>      
                            <button 
                                onClick={() => handleButtonClick("pdf_corail", "https://balimmo.fr/Investissement_Partage_Corail.pdf")}
                                data-value="pdf_corail" data-action="https://balimmo.fr/Investissement_Partage_Corail.pdf"
                                className="trigger-button w-fit m-auto sm:text-base text-sm flex flex-col items-center justify-center text-center bg-secondary border-4 border-primary text-primary font-semibold rounded-full py-3 px-6 hover:bg-primary hover:text-secondary transition-all">
                                Télécharger la Présentation PDF
                            </button>
                            <Link href="https://corail.balimmo.fr " target="_blank" 
                                className="w-fit m-auto flex flex-col sm:text-base text-sm items-center justify-center text-center bg-secondary border-4 border-primary text-primary font-semibold rounded-full py-3 px-6 hover:bg-primary hover:text-secondary transition-all">
                                Achetez des Parts de CORAIL
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-10 mb-20">
                <h1 className="sm:text-5xl text-4xl font-semibold text-secondary">Vendu</h1>
                <div className="flex sm:flex-row flex-col 2xl:gap-16 gap-8 justify-center items-center w-full text-center">
                
                    <div className="max-w-[350px]">                        
                        <img src="/image/investment/ruby.png" alt="" className="w-full m-auto" />                        
                    </div>

                    <div className="max-w-[350px]">                    
                        <img src="/image/investment/nanu.png" alt="" className="w-full m-auto" />                        
                    </div>

                    <div className="max-w-[350px]">
                        <img src="/image/investment/emerald.png" alt="" className="w-full m-auto" />                    
                    </div>                

                </div>
            </div>
            
        </section>
    </>
  )
}

export default page