"use client";
import { useSearchParams } from "next/navigation";
import { CATALOGUE } from "@/constants/villa";
import { useEffect, useState } from "react";
import Image from "next/image";
import Title from "./Title";
// import jsPDF from "jspdf";


const Calculate = () => {
//     const handleExportPDF = () => {
//     const doc = new jsPDF();

//     doc.text("Calculate Your Villa", 10, 10);
//     doc.text("Total Harga: 100,000 €", 10, 20);

//     doc.save("calculate.pdf");
//   };
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug"); // Mengambil slug villa
  const initialTerrainPrice = parseInt(searchParams.get("terrain") || "0", 10); // Harga terrain awal
  const basePrice = parseInt(searchParams.get("price") || "0", 10); // Harga proyek awal (sudah termasuk terrain)

  // Cari data villa berdasarkan slug
  const villa = CATALOGUE.find((item) => item.slug === slug);

  if (!villa) {
    return <div>Villa not found</div>;
  }

  // State untuk pilihan terrain dan opsi material
  const [selectedTerrainPrice, setSelectedTerrainPrice] = useState(initialTerrainPrice);
  const [selectedOptions, setSelectedOptions] = useState({
    charpente: 0,
    toiture: 0,
    isolation: 0,
    plafonds: 0,
    mesuiseries: 0,
    cuisine: 0,
    sol: 0,
    climatisation: 0,
    deckpool: 0,
    carport: 0,
    pool: 0,
    assainissement: 0,
  });

  // State untuk opsi default dari "Invest" dan "Confort"
  const [defaultOptions, setDefaultOptions] = useState({
    charpente: 0,
    toiture: 0,
    isolation: 0,
    plafonds: 0,
    mesuiseries: 0,
    cuisine: 0,
    sol: 0,
    climatisation: 0,
    deckpool: 0,
    carport: 0,
    pool: 0,
    assainissement: 0,
  });

  useEffect(() => {
    if (!villa || !villa.options) return; // Pastikan villa dan options ada sebelum melanjutkan
  
    let defaults = {
      charpente: 0,
      toiture: 0,
      isolation: 0,
      plafonds: 0,
      mesuiseries: 0,
      cuisine: 0,
      sol: 0,
      climatisation: 0,
      deckpool: 0,
      carport: 0,
      pool: 0,
      assainissement: 0,
    };
  
    if (villa.qualite === "Invest") {
      defaults = {
        charpente: villa.options.charpente?.[0]?.price || 0,
        toiture: villa.options.toiture?.[0]?.price || 0,
        isolation: villa.options.isolation?.[0]?.price || 0,
        plafonds: villa.options.plafonds?.[0]?.price || 0,
        mesuiseries: villa.options.mesuiseries?.[0]?.price || 0,
        cuisine: villa.options.cuisine?.[0]?.price || 0,
        sol: villa.options.sol?.[0]?.price || 0,
        climatisation: villa.options.climatisation?.[0]?.price || 0,
        deckpool: villa.options.deckpool?.[0]?.price || 0,
        carport: villa.options.carport?.[0]?.price || 0,
        pool: villa.options.pool?.[0]?.price || 0,
        assainissement: villa.options.assainissement?.[0]?.price || 0,
      };
    } else if (villa.qualite === "Confort") {
      defaults = {
        charpente: villa.options.charpente?.[1]?.price || 0,
        toiture: villa.options.toiture?.[1]?.price || 0,
        isolation: villa.options.isolation?.[1]?.price || 0,
        plafonds: villa.options.plafonds?.[1]?.price || 0,
        mesuiseries: villa.options.mesuiseries?.[1]?.price || 0,
        cuisine: villa.options.cuisine?.[1]?.price || 0,
        sol: villa.options.sol?.[1]?.price || 0,
        climatisation: villa.options.climatisation?.[1]?.price || 0,
        deckpool: villa.options.deckpool?.[1]?.price || 0,
        carport: villa.options.carport?.[1]?.price || 0,
        pool: villa.options.pool?.[1]?.price || 0,
        assainissement: villa.options.assainissement?.[1]?.price || 0,
      };
    }
  
    // Pastikan defaults memiliki struktur yang benar
    setDefaultOptions(defaults);
    setSelectedOptions(defaults);
  }, [villa?.qualite, villa?.options]);

  // Fungsi untuk mengganti terrain
  const handleSelectTerrain = (price: number) => {
    setSelectedTerrainPrice(price);
  };

  // Fungsi untuk mengganti opsi material
  const handleOptionChange = (type: string, price: number) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [type]: price,
    }));
  };

  // Total harga proyek (hanya base price + opsi tambahan)
  const totalProject = basePrice + (selectedTerrainPrice - initialTerrainPrice); // Base price + terrain
  const totalPrice = 
  totalProject +
    (selectedOptions.charpente - defaultOptions.charpente) +
    (selectedOptions.toiture - defaultOptions.toiture) +
    (selectedOptions.isolation - defaultOptions.isolation) +
    (selectedOptions.plafonds - defaultOptions.plafonds) +
    (selectedOptions.mesuiseries - defaultOptions.mesuiseries) +
    (selectedOptions.cuisine - defaultOptions.cuisine) +
    (selectedOptions.sol - defaultOptions.sol) +
    (selectedOptions.climatisation - defaultOptions.climatisation) +
    (selectedOptions.deckpool - defaultOptions.deckpool) +
    (selectedOptions.carport - defaultOptions.carport) +
    (selectedOptions.pool - defaultOptions.pool) +
    (selectedOptions.assainissement - defaultOptions.assainissement);

  return (
    <>
    {/* Banner */}
    <div className="sm:h-[60vh] h-[45vh] w-full overflow-hidden">
        <div className="relative h-full w-full overflow-hidden flex justify-center items-center">
            <Image src={villa.banner} alt='' height={1000} width={1920}/>
            <div className="bg-gradient-to-b from-secondary w-full h-full absolute flex flex-col justify-center items-center text-center sm:gap-3">
                <div className="text-white flex flex-col justify-center items-center gap-3 mb-3">                    
                    <h1 className="capitalize md:text-5xl text-3xl font-semibold tracking-wide">
                        {villa.name}                                                  
                    </h1>            
                </div>
            </div> 
        </div>            
    </div>

    {/* Qoutes Wrapper */}
    <div className="h-auto w-full sm:py-16 py-8 2xl:px-80 xl:px-10 px-5 m-auto">
      
      {/* Project Terrain Box */}
      <div className="m-auto">
        {/* Title */}
        <Title
            pretitle="Devis"
            title='Devis <b>personnalisé</b>'
        />
        {/* Title */}

        {/* Terrain Box */}
        <div className="border rounded-md p-5 space-y-2">
          <div>
              <h3 className="uppercase text-center">caractéristicques villa</h3>
              <hr />
          </div>

          <div className="text-center">
              <h3 className="text-[#999] xl:text-base text-sm">Prix de la construction</h3>
              <h1 className="xl:text-4xl text-3xl font-semibold">{villa.price} €</h1>
          </div>

          <div className="flex py-2 divide-x-2">
            <div className="basis-1/2 flex flex-col items-start">
                <h3 className="text-[#999] xl:text-base text-xs">Qualité de construction</h3>
                <h1 className="xl:text-xl font-medium flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="xl:w-[24px] w-[18px]" viewBox="0 0 24 24"><path d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"></path></svg>
                    {villa.qualite}
                </h1>
            </div>
              
            <div className="basis-1/2 flex flex-col items-end">
                <h3 className="text-[#999] xl:text-base text-xs">Temps construction</h3>
                <h1 className="xl:text-xl font-medium flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="xl:w-[24px] w-[18px]" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path></svg>
                    {villa.construction} Mois
                </h1>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-[#999] xl:text-base text-sm">Votre terrain</h3>
          </div>

          {/* Pilihan Terrain */}
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-5 grid-cols-2 gap-2">
            {Object.entries(villa.terrains).map(([key, terrain]) => (
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
                    <p>{villa.terrain} ARE</p>
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
        {/* Terrain Box */}
        
        {/* Project + Terrain */}
        <div className="pt-6 space-y-2 text-center">
            <h3 className="text-[#999] xl:text-lg text-base">Prix du projet + terrain</h3>
            <h1 className="xl:text-6xl text-4xl font-semibold">
                {totalProject.toLocaleString("fr-FR")} €
            </h1>
            <p className="text-xs text-slate-400">
                *Hors PTPMA, et Ameublement
            </p>      
        </div>
        {/* Project + Terrain */}
      </div>
      {/* Project Terrain Box */}

      {/* Qoutes Calculation */}
      <div className="container mx-auto px-4 py-8 space-y-5">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
          <h3 className="opacity-0 p-4 text-white rounded-md md:block hidden">
            Lorem
          </h3>
          <h3 className="bg-[#49AD39] p-4 text-white rounded-md">
            Invest
          </h3>
          <h3 className="bg-[#4CA1F0] p-4 text-white rounded-md">
            Confort
          </h3>
          <h3 className="bg-[#C5B357] p-4 text-white rounded-md">
            +Value
          </h3>
        </div>

        {/* Charpente */}
        <div className="grid md:grid-cols-4 gap-4 border-b pb-4">
          <div>
            <h1 className="font-semibold">Charpente</h1>
            <p className="text-sm">
              Lorem ipsum is a dummy or placeholder text commonly
            </p>
          </div>
          {villa.options.charpente.map((option) => (          
          <button
            key={option.id}
            className={`button-calculate py-2 px-4 flex items-center gap-3 rounded`}
            onClick={() => handleOptionChange("charpente", option.price)}
          >
            <input
              type="checkbox"
              checked={selectedOptions.charpente === option.price}
              readOnly
              className="w-4 h-4"
            />
            <div className="flex flex-col items-start">
              <p className="text-sm">{option.name}</p>
              <h1 className="font-bold text-xl font-poppins">{option.price.toLocaleString("fr-FR")} €</h1>
            </div>
          </button>          
          ))}
        </div>

        {/* Toiture */}
        <div className="grid md:grid-cols-4 gap-4 border-b pb-4">
          <div>
            <h1 className="font-semibold">Toiture</h1>
            <p className="text-sm">
              Lorem ipsum is a dummy or placeholder text commonly
            </p>
          </div>
          {villa.options.toiture.map((option) => (          
          <button
            key={option.id}
            className={`button-calculate py-2 px-4 flex items-center gap-3 rounded`}
            onClick={() => handleOptionChange("toiture", option.price)}
          >
            <input
              type="checkbox"
              checked={selectedOptions.toiture === option.price}
              readOnly
              className="w-4 h-4"
            />
            <div className="flex flex-col items-start">
              <p className="text-sm">{option.name}</p>
              <h1 className="font-bold text-xl font-poppins">{option.price.toLocaleString("fr-FR")} €</h1>
            </div>
          </button>          
          ))}
        </div>

        {/* Isolation */}
        <div className="grid md:grid-cols-4 gap-4 border-b pb-4">
          <div>
            <h1 className="font-semibold">Isolation</h1>
            <p className="text-sm">
              Lorem ipsum is a dummy or placeholder text commonly
            </p>
          </div>
          {villa.options.isolation.map((option) => (          
          <button
            key={option.id}
            className={`button-calculate py-2 px-4 flex items-center gap-3 rounded`}
            onClick={() => handleOptionChange("isolation", option.price)}
          >
            <input
              type="checkbox"
              checked={selectedOptions.isolation === option.price}
              readOnly
              className="w-4 h-4"
            />
            <div className="flex flex-col items-start">
              <p className="text-sm">{option.name}</p>
              <h1 className="font-bold text-xl font-poppins">{option.price.toLocaleString("fr-FR")} €</h1>
            </div>
          </button>          
          ))}
        </div>

        {/* Plafonds */}
        <div className="grid md:grid-cols-4 gap-4 border-b pb-4">
          <div>
            <h1 className="font-semibold">Plafonds</h1>
            <p className="text-sm">
              Lorem ipsum is a dummy or placeholder text commonly
            </p>
          </div>
          {villa.options.plafonds.map((option) => (          
          <button
            key={option.id}
            className={`button-calculate py-2 px-4 flex items-center gap-3 rounded`}
            onClick={() => handleOptionChange("plafonds", option.price)}
          >
            <input
              type="checkbox"
              checked={selectedOptions.plafonds === option.price}
              readOnly
              className="w-4 h-4"
            />
            <div className="flex flex-col items-start">
              <p className="text-sm">{option.name}</p>
              <h1 className="font-bold text-xl font-poppins">{option.price.toLocaleString("fr-FR")} €</h1>
            </div>
          </button>          
          ))}
        </div>

        {/* Mesuiseries */}
        <div className="grid md:grid-cols-4 gap-4 border-b pb-4">
          <div>
            <h1 className="font-semibold">Mesuiseries</h1>
            <p className="text-sm">
              Lorem ipsum is a dummy or placeholder text commonly
            </p>
          </div>
          {villa.options.mesuiseries.map((option) => (          
          <button
            key={option.id}
            className={`button-calculate py-2 px-4 flex items-center gap-3 rounded`}
            onClick={() => handleOptionChange("mesuiseries", option.price)}
          >
            <input
              type="checkbox"
              checked={selectedOptions.mesuiseries === option.price}
              readOnly
              className="w-4 h-4"
            />
            <div className="flex flex-col items-start">
              <p className="text-sm">{option.name}</p>
              <h1 className="font-bold text-xl font-poppins">{option.price.toLocaleString("fr-FR")} €</h1>
            </div>
          </button>          
          ))}
        </div>

        {/* cuisine */}
        <div className="grid md:grid-cols-4 gap-4 border-b pb-4">
          <div>
            <h1 className="font-semibold">Cuisine</h1>
            <p className="text-sm">
              Lorem ipsum is a dummy or placeholder text commonly
            </p>
          </div>
          {villa.options.cuisine.map((option) => (          
          <button
            key={option.id}
            className={`button-calculate py-2 px-4 flex items-center gap-3 rounded`}
            onClick={() => handleOptionChange("cuisine", option.price)}
          >
            <input
              type="checkbox"
              checked={selectedOptions.cuisine === option.price}
              readOnly
              className="w-4 h-4"
            />
            <div className="flex flex-col items-start">
              <p className="text-sm">{option.name}</p>
              <h1 className="font-bold text-xl font-poppins">{option.price.toLocaleString("fr-FR")} €</h1>
            </div>
          </button>          
          ))}
        </div>

        {/* sol */}
        <div className="grid md:grid-cols-4 gap-4 border-b pb-4">
          <div>
            <h1 className="font-semibold">Sol</h1>
            <p className="text-sm">
              Lorem ipsum is a dummy or placeholder text commonly
            </p>
          </div>
          {villa.options.sol.map((option) => (          
          <button
            key={option.id}
            className={`button-calculate py-2 px-4 flex items-center gap-3 rounded`}
            onClick={() => handleOptionChange("sol", option.price)}
          >
            <input
              type="checkbox"
              checked={selectedOptions.sol === option.price}
              readOnly
              className="w-4 h-4"
            />
            <div className="flex flex-col items-start">
              <p className="text-sm">{option.name}</p>
              <h1 className="font-bold text-xl font-poppins">{option.price.toLocaleString("fr-FR")} €</h1>
            </div>
          </button>          
          ))}
        </div>

        {/* climatisation */}
        <div className="grid md:grid-cols-4 gap-4 border-b pb-4">
          <div>
            <h1 className="font-semibold">Climatisation</h1>
            <p className="text-sm">
              Lorem ipsum is a dummy or placeholder text commonly
            </p>
          </div>
          {villa.options.climatisation.map((option) => (          
          <button
            key={option.id}
            className={`button-calculate py-2 px-4 flex items-center gap-3 rounded`}
            onClick={() => handleOptionChange("climatisation", option.price)}
          >
            <input
              type="checkbox"
              checked={selectedOptions.climatisation === option.price}
              readOnly
              className="w-4 h-4"
            />
            <div className="flex flex-col items-start">
              <p className="text-sm">{option.name}</p>
              <h1 className="font-bold text-xl font-poppins">{option.price.toLocaleString("fr-FR")} €</h1>
            </div>
          </button>          
          ))}
        </div>

        {/* deckpool */}
        <div className="grid md:grid-cols-4 gap-4 border-b pb-4">
          <div>
            <h1 className="font-semibold">Deckpool</h1>
            <p className="text-sm">
              Lorem ipsum is a dummy or placeholder text commonly
            </p>
          </div>
          {villa.options.deckpool.map((option) => (          
          <button
            key={option.id}
            className={`button-calculate py-2 px-4 flex items-center gap-3 rounded`}
            onClick={() => handleOptionChange("deckpool", option.price)}
          >
            <input
              type="checkbox"
              checked={selectedOptions.deckpool === option.price}
              readOnly
              className="w-4 h-4"
            />
            <div className="flex flex-col items-start">
              <p className="text-sm">{option.name}</p>
              <h1 className="font-bold text-xl font-poppins">{option.price.toLocaleString("fr-FR")} €</h1>
            </div>
          </button>          
          ))}
        </div>

        {/* carport */}
        <div className="grid md:grid-cols-4 gap-4 border-b pb-4">
          <div>
            <h1 className="font-semibold">Carport</h1>
            <p className="text-sm">
              Lorem ipsum is a dummy or placeholder text commonly
            </p>
          </div>
          {villa.options.carport.map((option) => (          
          <button
            key={option.id}
            className={`button-calculate py-2 px-4 flex items-center gap-3 rounded`}
            onClick={() => handleOptionChange("carport", option.price)}
          >
            <input
              type="checkbox"
              checked={selectedOptions.carport === option.price}
              readOnly
              className="w-4 h-4"
            />
            <div className="flex flex-col items-start">
              <p className="text-sm">{option.name}</p>
              <h1 className="font-bold text-xl font-poppins">{option.price.toLocaleString("fr-FR")} €</h1>
            </div>
          </button>          
          ))}
        </div>

        {/* pool */}
        <div className="grid md:grid-cols-4 gap-4 border-b pb-4">
          <div>
            <h1 className="font-semibold">Pool</h1>
            <p className="text-sm">
              Lorem ipsum is a dummy or placeholder text commonly
            </p>
          </div>
          {villa.options.pool.map((option) => (          
          <button
            key={option.id}
            className={`button-calculate py-2 px-4 flex items-center gap-3 rounded`}
            onClick={() => handleOptionChange("pool", option.price)}
          >
            <input
              type="checkbox"
              checked={selectedOptions.pool === option.price}
              readOnly
              className="w-4 h-4"
            />
            <div className="flex flex-col items-start">
              <p className="text-sm">{option.name}</p>
              <h1 className="font-bold text-xl font-poppins">{option.price.toLocaleString("fr-FR")} €</h1>
            </div>
          </button>          
          ))}
        </div>

        {/* assainissement */}
        <div className="grid md:grid-cols-4 gap-4 border-b pb-4">
          <div>
            <h1 className="font-semibold">Assainissement</h1>
            <p className="text-sm">
              Lorem ipsum is a dummy or placeholder text commonly
            </p>
          </div>
          {villa.options.assainissement.map((option) => (          
          <button
            key={option.id}
            className={`button-calculate py-2 px-4 flex items-center gap-3 rounded`}
            onClick={() => handleOptionChange("assainissement", option.price)}
          >
            <input
              type="checkbox"
              checked={selectedOptions.assainissement === option.price}
              readOnly
              className="w-4 h-4"
            />
            <div className="flex flex-col items-start">
              <p className="text-sm">{option.name}</p>
              <h1 className="font-bold text-xl font-poppins">{option.price.toLocaleString("fr-FR")} €</h1>
            </div>
          </button>          
          ))}
        </div>
       
      </div>
      {/* Qoutes Calculation */}

      <div className=" bg-secondary text-white p-4 rounded-md text-center">
        <h3 className="text-base">Total Prix</h3>
        <h1 className="text-3xl font-semibold">
          {totalPrice.toLocaleString("fr-FR")} €
        </h1>
      </div>
    </div>

    {/* Qoutes Calculation */}
       {/*<div className="container mx-auto px-4 py-8" id="printable-area">  */}
     
        {/* <div className="space-y-4">           */}
          {/* Pilihan Terrain */}
          {/* <div className="border p-4 rounded-md mt-10">
            <h3 className="text-md font-medium">Terrain</h3>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {Object.entries(villa.terrains).map(([key, terrain]) => (
                <button
                  key={key}
                  className={`p-4 border rounded ${selectedTerrainPrice === terrain.price ? "border-primary" : ""}`}
                  onClick={() => handleSelectTerrain(terrain.price)}
                >
                  <h1 className="xl:text-lg font-medium">{terrain.name}</h1>
                  <p>{terrain.price.toLocaleString("fr-FR")} €</p>
                </button>
              ))}
            </div>
          </div> */}
          
          {/* Total Price */}
          {/* <div className=" bg-secondary text-white p-4 rounded-md text-center">
            <h3 className="text-base">Total Prix</h3>
            <h1 className="text-3xl font-semibold">
              {totalPrice.toLocaleString("fr-FR")} €
            </h1>
          </div> */}
        {/* </div> */}

        {/* <button
          onClick={handleExportPDF}
          className="bg-green-500 text-white px-4 py-2 rounded-md mt-4"
        >
          Export to PDF
        </button> */}
      {/* </div> */}
      {/* Qoutes Calculation */}
    </>
  );
};

export default Calculate;
