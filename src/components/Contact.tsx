import React from 'react'

const Contact = () => {
  return (
    <section className="h-auto w-full bg-background sm:py-16 py-8 2xl:px-64 xl:px-10 px-5 m-auto space-y-10">
      <div className="">
          <div className="flex items-center gap-3">
              <hr className="w-[50px] border border-primary wow fadeInLeft" />
              <p className="text-primary uppercase font-medium wow fadeInLeft">Contact</p>
          </div>
          <h1 className="2xl:text-6xl xl:text-5xl md:text-4xl text-2xl uppercase text-secondary font-semibold wow fadeInDown" data-wow-delay=".5s">Contactez-nous</h1>
      </div>
      <div className="lg:flex items-center">
      <div className="bg-white basis-3/5 sm:p-10 p-5 lg:rounded-lg rounded-t-lg shadow-sm wow fadeIn z-10" data-wow-delay=".75s">
          <form action="/"  name="contacts-form" className="sm:grid grid-cols-2 gap-5 space-y-3 sm:space-y-0">                        
              <div className="relative">
                  <input type="text" name="prenom" required id="prenom" className="block rounded-lg px-4 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-background appearance-none  focus:outline-none focus:ring-0 peer" placeholder=" " />
                  <label htmlFor="prenom" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-4 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                      Prénom
                  </label>
              </div>

              <div className="relative">
                  <input type="text" name="nom" required id="nom" className="block rounded-lg px-4 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-background appearance-none  focus:outline-none focus:ring-0 peer" placeholder=" " />
                  <label htmlFor="nom" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-4 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                      Nom
                  </label>
              </div>

              <div className="relative">
                  <input type="text" name="number" required id="number" className="block rounded-lg px-4 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-background appearance-none  focus:outline-none focus:ring-0 peer" placeholder=" " />
                  <label htmlFor="number" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-4 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                      Téléphone
                  </label>
              </div>

              <div className="relative">
                  <input type="email" name="email" required id="email" className="block rounded-lg px-4 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-background appearance-none  focus:outline-none focus:ring-0 peer" placeholder=" " />
                  <label htmlFor="email" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-4 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                      Email
                  </label>
              </div>

              <div className="relative col-span-2">
                  <textarea name="message" required id="message" className="h-[150px] max-h-[150px] block rounded-lg px-4 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-background appearance-none  focus:outline-none focus:ring-0 peer" placeholder=" "></textarea>
                  <label htmlFor="message" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-4 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                      Votre message
                  </label>
              </div>

              <div className="flex items-center mb-4 col-span-2">
                  <input id="accept" name="agree" required type="checkbox" value="Agree" className="w-5 h-5 text-secondary bg-gray-100 border-secondary rounded " />
                  <label htmlFor="accept" className="ms-2 sm:text-sm text-xs font-normal text-secondary">En cochant cette case, vous acceptez notre politique de confidentialité</label>
              </div>

              <button type="submit" className="m-auto text-center col-span-2 text-white bg-secondary px-10 py-3 rounded-lg font-medium">Envoyer</button>
          </form>

          <hr className="border-2 border-background mt-5 sm:mb-10 mb-5" />

          <div className="m-auto text-center space-x-5 flex justify-center">
              <a href="https://wa.me/6285333777710?text=Bonjour,%20je%20viens%20de%20Balimmo.fr%20" target="_blank" className="text-white bg-primary px-5 py-3 rounded-lg font-medium text-sm flex items-center justify-center gap-1 w-[200px]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-white w-[24px] h-[24px]" viewBox="0 0 24 24" ><path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path></svg>
                  Whatsapp
              </a>
              <a href="mailto:hello@balimmo.fr" className="text-white bg-primary px-5 py-3 rounded-lg font-medium text-sm flex items-center justify-center gap-1 w-[200px]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="fill-white w-[24px] h-[24px]" viewBox="0 0 24 24"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>
                  Email
              </a>
          </div>
      </div>
      <div className="basis-2/5 sm:space-y-16 space-y-6 text-white lg:px-16 py-16 px-5 rounded-b-lg lg:rounded-l-none lg:rounded-r-lg" 
      // style={background: url(img/bg-contact.png); background-position: center; background-size: cover;}>
        style={{
                background: `url(image/bg-contact.png)`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                }}>
          <div className="flex items-center sm:gap-5 gap-3">
              <img src="image/icon/location-icon.png" alt="" className="sm:w-[80px] w-[50px]" />
              <div>
                  <h1 className="sm:text-2xl text-base font-semibold">Adresse :</h1>
                  <p className="sm:text-base text-xs">Jalan Pantai Batu Bolong No.15, Canggu, 80351 BALI</p>
              </div>
          </div>

          <div className="flex items-center sm:gap-5 gap-3">
              <img src="image/icon/contact-icon.png" alt="" className="sm:w-[80px] w-[50px]" />
              <div>
                  <h1 className="sm:text-2xl text-base font-semibold">Contact :</h1>
                  <p className="sm:text-base text-xs">+62 85 333 777 500</p>
              </div>
          </div>

          <div className="flex items-center sm:gap-5 gap-3">
              <img src="image/icon/workhour-icon.png" alt="" className="sm:w-[80px] w-[50px]" />
              <div>
                  <h1 className="sm:text-2xl text-base font-semibold">Ouvert :</h1>
                  <p className="sm:text-base text-xs">Lun - Ven 9H - 18H</p>
                  <p className="sm:text-base text-xs">Samedi 9H - 13H</p>
              </div>
          </div>
      </div>
      </div>
  </section>
  )
}

export default Contact