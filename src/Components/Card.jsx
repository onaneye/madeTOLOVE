

const Card = ({imgSrc,title, description, styles}) => {
  return (
    <div className='relative'>
        <div className={`${styles}`} >
        <img src={imgSrc} loading="lazy" alt="service-img1" className={`object-cover rounded-lg w-full h-full`}/>
        </div>
        <div className="opacity-70 md:opacity-0 hover:opacity-70 flex z-10 flex-col items-center justify-center absolute top-0 px-3 object-cover w-full bg-gradient-to-br from-purple-500 to-red-500 h-full">
            <h3 className="text-2xl font-bold font-bodoni text-white uppercase">{title}</h3>
            <p className="font-helvetica text-white text-sm ">{description}</p>
        </div>
    </div>
  )
}

export default Card