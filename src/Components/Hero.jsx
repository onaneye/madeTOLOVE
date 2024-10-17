import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons'; 
import { motion } from 'framer-motion';
import { fadeIn } from './variants';
import { heroSlider } from './constant';
import { useState, useEffect } from 'react';


const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [carousel] = useState(heroSlider)
    const timer = 5000

    useEffect(()=>{
     const intervalId = setInterval(()=>{
      setCurrentIndex((prevState) =>
        prevState === carousel.length -1 ? 0 : prevState + 1
      )
     },timer)
    //  clean up

    return ()=> clearInterval(intervalId)

    },[carousel.length])

  return (
    <div className="relative overflow-hidden min-w-full">
      <div className='flex items-center transition-transform duration-500 ease-in-out ' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
      {carousel.map((slide)=>(
        <div className='bg-cover bg-center min-w-full bg-no-repeat h-screen lg:mt-24' style={{backgroundImage:  `url(${slide.imageUrl})`}} key={slide.id}>
         <div className=" inset-0 bg-purple-gradient h-full object-cover">
           <div className='width-container h-screen md:h-[80vh] flex flex-col justify-center items-start'>
             <div className='mx-3 sm:w-[550px] xl:[600px]'>
               <motion.h2 className='text-2xl sm:text-4xl lg:text-4xl xl:text-5xl text-white text-start font-bold'
                 variants={fadeIn('down', 0.2)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{ once: false, amount: 0.7 }}
               >
                {slide.title}
               </motion.h2>
               <motion.p className='text-sm md:text-md text-white mt-4 font-helvetica'
                 variants={fadeIn('up', 0.2)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{ once: false, amount: 0.7 }}
               >
                 {slide.description}
               </motion.p>
               < motion.div className='mt-4'
                 variants={fadeIn('up', 0.2)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{ once: false, amount: 0.7 }}
               >
                 <button className='px-6 py-4 bg-white font-helvetica font-bold text-lg text-purple-500 rounded-full shadow-md hover:bg-purple-500 hover:text-white cursor-pointer'>
                   <FontAwesomeIcon icon={faGift} /> Get Started
                 </button>
               </ motion.div>
             </div>
           </div>
         </div>
      </div>
      ))}
    </div>
    </div>
  );
};

export default Hero;
