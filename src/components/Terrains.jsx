'use client';
import { useState, useMemo, useRef  } from 'react';
import { TERRAIN } from '@/constants/terrain';
import { SlideshowLightbox } from 'lightbox.js-react';
import Button from './Button';
import Badge from './Badge';

const Terrains = () => {
  const [filters, setFilters] = useState({
    size: '',
    price: '',
    zone: '',
    location: '',
  });

  const [selectedTerrain, setSelectedTerrain] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formRef = useRef(null);

  // Sort TERRAIN by size and price
  const sortedTerrains = useMemo(() => {
    return [...TERRAIN].sort((a, b) => {
      if (Number(a.size) !== Number(b.size)) {
        return Number(a.size) - Number(b.size); // Sort by size (ascending)
      }
      return Number(a.price) - Number(b.price); // If size is the same, sort by price (ascending)
    });
  }, []);

  // Apply filters after sorting
  const filteredTerrains = sortedTerrains.filter((terrain) => {
    const matchesSize =
      filters.size === '<5'
        ? Number(terrain.size) < 5
        : filters.size === '5-15'
        ? Number(terrain.size) >= 5 && Number(terrain.size) <= 15
        : filters.size === '16-25'
        ? Number(terrain.size) >= 16 && Number(terrain.size) <= 25
        : filters.size === '>25'
        ? Number(terrain.size) > 25
        : true;

    const matchesPrice =
      filters.price === '<5'
        ? Number(terrain.price) < 5
        : filters.price === '5-10'
        ? Number(terrain.price) >= 5 && Number(terrain.price) <= 10
        : filters.price === '11-15'
        ? Number(terrain.price) >= 11 && Number(terrain.price) <= 15
        : filters.price === '>15'
        ? Number(terrain.price) > 15
        : true;

    const matchesZone = filters.zone
      ? terrain.zone.toLowerCase() === filters.zone.toLowerCase()
      : true;

    const matchesLocation = filters.location
      ? terrain.name.toLowerCase().includes(filters.location.toLowerCase())
      : true;

    return matchesSize && matchesPrice && matchesZone && matchesLocation;
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Pop up setup
  const handleShowPopup  = (terrain) => {
    setSelectedTerrain(terrain);
  };
  const handleClosePopup = () => {
    setSelectedTerrain(null);
  };

  // Contact from show
  const handleContactClick = () => {
    setIsFormVisible(true); 
    setTimeout(() => {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 100); 
  };

  

  return (
    <section className="2xl:w-4/5 w-11/12 xl:py-20 sm:py-10 py-5 gap-20 rounded-lg m-auto">    

      {/* Filters */}
      <div className="filters grid md:grid-cols-4 grid-cols-2 md:text-base text-xs md:gap-4 gap-2 mb-6">
        <select
          name="size"
          value={filters.size}
          onChange={handleFilterChange}
          className="md:p-2 border rounded"
        >
          <option value="">Filtrer par taille</option>
          <option value="<5">Moins de 5 ARE</option>
          <option value="5-15">5 - 15 ARE</option>
          <option value="16-25">16 - 25 ARE</option>
          <option value=">25">Plus de 25 ARE</option>
        </select>
        <select
          name="price"
          value={filters.price}
          onChange={handleFilterChange}
          className="md:p-2 py-2 border rounded"
        >
          <option value="">Filtrer par prix</option>
          <option value="<5">Moins de 5M/ARE</option>
          <option value="5-10">5 - 10M/ARE</option>
          <option value="11-15">11 - 15M/ARE</option>
          <option value=">15">Plus de 15M/ARE</option>
        </select>
        <select
          name="zone"
          value={filters.zone}
          onChange={handleFilterChange}
          className="md:p-2 py-2 border rounded"
        >
          <option value="">Filtrer par zone</option>
          <option value="jaune">Zone Jaune</option>
          <option value="rose">Zone Rose</option>
        </select>
        <select
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          className="md:p-2 py-2 border rounded"
        >
          <option value="">Filtrer par emplacement</option>
          <option value="buwit">Buwit</option>
          <option value="canggu">Canggu</option>
          <option value="cemagi">Cemagi</option>
          <option value="cepaka">Cepaka</option>
          <option value="munggu">Munggu</option>
          <option value="nyanyi">Nyanyi</option>
          <option value="ubud">Ubud</option>
          <option value="kaba kaba">Kaba Kaba</option>
          <option value="tanah lot">Tanah Lot</option>
        </select>
      </div>
      {/* Filters */}

      {/* Terrain List */}
      <div className="grid xl:grid-cols-2 md:grid-cols-1 2xl:gap-16 gap-10">
        {filteredTerrains.map((terrain) => (
          
          <div className="h-fit w-full flex sm:flex-row flex-col gap-3 relative" key={terrain.id}>            
            <div className="overflow-hidden basis-[55%] rounded-lg relative">
                {terrain.status && terrain.status.toLowerCase() === "vendu" && (
                  <div className="absolute w-full h-full z-50 overflow-hidden bg-secondary/50">
                    <span 
                      className='-left-1/2 top-[40%] rotate-45 absolute block w-[700px] py-[18px] bg-secondary text-white border-2 border-dotted outline outline-4 border-white outline-primary outline-offset-4 text-2xl font-semibold text-center'>
                        Vendu
                    </span>
                  </div>
                )}
              <img className="w-full h-full object-cover cursor-pointer scale-110 hover:scale-100 transition-all duration-500" 
                src={terrain.image1} alt="" onClick={() => handleShowPopup(terrain)}/>
            </div>
            <div className="flex flex-col 2xl:p-4 sm:p-0 p-1 basis-[45%]">
                <div className="flex w-full justify-between">
                  <h1 className="2xl:text-xl font-semibold">{terrain.name} {terrain.size} ARE</h1>
                  <Badge 
                    title={`${terrain.price}M/ARE`}
                    variant='small-badge'
                  />
                </div>
                <div className="list-none mb-2 2xl:text-base text-sm">
                  <li className="2xl:py-3 py-2 flex gap-1 2xl:border-b-2 border-b">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px]" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                      {terrain.name}
                  </li>
                  <li className="2xl:py-3 py-2 flex gap-1 2xl:border-b-2 border-b">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px]" viewBox="0 0 24 24"><path d="M3 5v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2zm16.002 14H5V5h14l.002 14z"></path><path d="M15 12h2V7h-5v2h3zm-3 3H9v-3H7v5h5z"></path></svg>
                      <div>
                        {terrain.size} ARE / {Math.round(terrain.size * 100)}m<sup>2</sup>
                      </div>
                  </li>
                  <li className="2xl:py-3 py-2 flex gap-1 2xl:border-b-2 border-b">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px]" viewBox="0 0 24 24"><path d="M11.707 2.293A.997.997 0 0 0 11 2H6a.997.997 0 0 0-.707.293l-3 3A.996.996 0 0 0 2 6v5c0 .266.105.52.293.707l10 10a.997.997 0 0 0 1.414 0l8-8a.999.999 0 0 0 0-1.414l-10-10zM13 19.586l-9-9V6.414L6.414 4h4.172l9 9L13 19.586z"></path><circle cx="8.353" cy="8.353" r="1.647"></circle></svg>
                      {terrain.price}M/ARE
                  </li>
                  <li className="2xl:py-3 py-2 flex gap-1 2xl:border-b-2 border-b">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px]" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path></svg>
                      {terrain.time}
                  </li>
                  <li className="2xl:py-3 py-2 flex gap-1 2xl:border-b-2 border-b">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px]" viewBox="0 0 24 24"><path d="M3 3v17a1 1 0 0 0 1 1h17v-2H5V3H3z"></path><path d="M15.293 14.707a.999.999 0 0 0 1.414 0l5-5-1.414-1.414L16 12.586l-2.293-2.293a.999.999 0 0 0-1.414 0l-5 5 1.414 1.414L13 12.414l2.293 2.293z"></path></svg>
                      Zone {terrain.zone}
                  </li>
                </div>
                <SlideshowLightbox className="grid grid-cols-3 gap-2" showThumbnails={true}>
                  {Array.from({ length: (terrain.totalImages || 4) -1 }).map((_, index) => {
                    const imageUrl = `${terrain.img}/img${index + 2}.jpg`;
                    return (
                      <img
                        key={index}
                        src={imageUrl}
                        alt={`Image ${index + 1}`}
                        className="w-full h-[75px] rounded-md object-cover"
                      />
                    );
                  })}
                </SlideshowLightbox>
                <div className="mt-4">                            
                  <button 
         
                    onClick={terrain.status === "vendu" ? undefined : () => handleShowPopup(terrain)}
                    disabled={terrain.status === "vendu"}
                    className={`rounded-full border-primary border bg-primary text-white text-sm font-medium text-center px-3 py-2 hover:bg-transparent hover:text-primary hover:border-primary transition-all ${terrain.status === "vendu" ? "!bg-slate-300 border-slate-300 !cursor-not-allowed" : ""}`}
                  >
                    Plus d'infos sur ce terrain
                  </button>
                </div>
            </div>

            {/* Pop Up */}
            {selectedTerrain  && (
            <div className='fixed top-0 left-0 h-screen w-screen z-50 bg-[#151515] flex sm:p-8' onClick={handleClosePopup}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                className='fill-white w-10 h-10 fixed right-5 top-5 m-auto z-50 cursor-pointer'
                onClick={handleClosePopup}
              >
                <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
              </svg>
              <div className='bg-white 2xl:w-1/2 w-4/5 2xl:h-full h-3/4 overflow-y-scroll m-auto sm:p-8 p-4 space-y-8 rounded-md' onClick={(e) => e.stopPropagation()}>
                {/* Title */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className='xl:text-base text-sm text-slate-500'>Détail du terrain</p>
                    <h1 className="capitalize xl:text-6xl text-4xl font-medium">{selectedTerrain.name}</h1>
                  </div>
                  
                  <Badge 
                    title={`${selectedTerrain.price}M/Are`}
                    variant='big-badge'
                  />
                </div>
                {/* Slider */}            
                <SlideshowLightbox className="grid grid-cols-2 gap-2" showThumbnails={true}>
                  {Array.from({ length: selectedTerrain.totalImages }).map((_, index) => {
                    const imageUrl = `${selectedTerrain.img}/img${index + 1}.jpg`;
                    return (
                      <img
                        key={index}
                        src={imageUrl}
                        alt={`Image ${index + 1}`}
                        className="w-full sm:h-[200px] h-[150px] rounded-sm object-cover"
                      />
                    );
                  })}
                </SlideshowLightbox>

                {/* List */}
                <div className='flex flex-col gap-4 sm:text-lg text-sm'>
                  <div className='grid sm:grid-cols-2 gap-4'>
                    <div className='flex gap-1 border-b pb-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px]" viewBox="0 0 24 24"><path d="M11.707 2.293A.997.997 0 0 0 11 2H6a.997.997 0 0 0-.707.293l-3 3A.996.996 0 0 0 2 6v5c0 .266.105.52.293.707l10 10a.997.997 0 0 0 1.414 0l8-8a.999.999 0 0 0 0-1.414l-10-10zM13 19.586l-9-9V6.414L6.414 4h4.172l9 9L13 19.586z"></path><circle cx="8.353" cy="8.353" r="1.647"></circle></svg>
                      <h1>Prix / Are / an (à partir de) : <b className='font-bold'>{selectedTerrain.price} €</b></h1>
                    </div>
                    <div className='flex gap-1 border-b pb-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px]" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path></svg>
                      <h1>Durée de location : <b className='font-bold'>{selectedTerrain.time}</b></h1>
                    </div> 
                    <div className='flex gap-1 border-b pb-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px]" viewBox="0 0 24 24"><path d="M3 5v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2zm16.002 14H5V5h14l.002 14z"></path><path d="M15 12h2V7h-5v2h3zm-3 3H9v-3H7v5h5z"></path></svg>
                      <h1>Nombre d'ares total : <b className='font-bold'>{selectedTerrain.size}</b></h1>
                    </div>
                    <div className='flex gap-1 border-b pb-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px]" viewBox="0 0 24 24"><path d="M3 3v17a1 1 0 0 0 1 1h17v-2H5V3H3z"></path><path d="M15.293 14.707a.999.999 0 0 0 1.414 0l5-5-1.414-1.414L16 12.586l-2.293-2.293a.999.999 0 0 0-1.414 0l-5 5 1.414 1.414L13 12.414l2.293 2.293z"></path></svg>
                      <h1>Zone : <b className='font-bold'>{selectedTerrain.zone}</b></h1>
                    </div>            
                  </div>                  
                </div>

                {/* Button */}
                <Button 
                  type="button"
                  title="Contactez-nous"
                  variant="btn_primary"
                  onclick={handleContactClick}
                />

                {isFormVisible && (
                <div className='space-y-4' ref={formRef}>
                  <div>
                    <p className='xl:text-base text-sm text-slate-500'>Veuillez remplir ceci</p>
                    <h1 className="capitalize xl:text-6xl text-4xl font-medium">Coordonnées</h1>
                  </div>

                  <form action="/" name="contacts-form" className="sm:grid sm:grid-cols-2 gap-5 space-y-3 sm:space-y-0">      
                    <input type="hidden" value={`${selectedTerrain.name} - ${selectedTerrain.size} Are`}/>
                    <div className="relative">
                        <input type="text" name="nom" required id="nom" className="block rounded-lg px-4 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-background appearance-none  focus:outline-none focus:ring-0 peer" placeholder=" " />
                        <label htmlFor="nom" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-4 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                            Nom et prénom
                        </label>
                    </div>

                    <div className="relative">
                        <input type="email" name="email" required id="email" className="block rounded-lg px-4 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-background appearance-none  focus:outline-none focus:ring-0 peer" placeholder=" " />
                        <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-4 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                            Email
                        </label>
                    </div>

                    <div className='m-auto max-w-[350px] col-span-2'>
                      <Button 
                        type="submit"
                        title="Envoyer"
                        variant="btn_primary"
                      />                            
                    </div>
                  </form>
                </div>
                )}
              </div>
            </div>
            )}
            {/* Pop Up */}
          </div>
        ))}
      </div>
      {/* Terrain List */}
    </section>
  );
};

export default Terrains;
