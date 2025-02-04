type TitleProps = {
    pretitle: string;
    title: string;
}
const Title = ({ pretitle, title}: TitleProps) => {
  return (
   
    <div className="mb-10 space-y-3">
        <div className="flex items-center gap-3 justify-center">
            <hr className="w-[50px] border border-[#999] sm:block hidden" />
            <h3 className="text-[#999] font-medium uppercase sm:text-base text-sm">{pretitle}</h3>
        </div>
        <h1 className="2xl:text-6xl lg:text-5xl text-4xl uppercase font-extralight text-secondary text-center" dangerouslySetInnerHTML={{ __html: title }}></h1>
    </div>
  )
}

export default Title