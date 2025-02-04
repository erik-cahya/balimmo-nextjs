import React from 'react'

const Video = () => {
  return (
    <section className="h-full 2xl:w-3/5 w-11/12 py-20 rounded-lg overflow-hidden m-auto flex items-center" >                               
        <iframe className="w-full md:h-[75vh] sm:h-[350px] h-[225px]" src="https://www.youtube.com/embed/iaOv2pNFdEA?si=dN5_gS1Rt_eK4sPC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </section>
  )
}

export default Video