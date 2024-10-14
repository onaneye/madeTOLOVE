import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons'; 
// import { useState} from 'react';
// import { heroSlider } from './constant';

const Hero = () => {
  // const [currentIndex, setCurrentIndex] = useState(0)
  // const [slider, setSlider]= useState(heroSlider)

  // useEffect(()=>{
  //   setInterval(()=>{
  //     currentIndex + 1
  //   }, 500)
  // })
  return (
    <div class="relative bg-hero bg-cover bg-no-repeat h-screen bg-right md:bg-[right-top_6rem]">
     <div class="absolute inset-0 bg-purple-gradient">
      <div className='width-container h-screen md:h-[80vh] flex flex-col justify-center items-start'>
        <div className=' w-[300px] mx-3  sm:w-[550px] xl:[600px]'>
          <h2 className='text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-alfaslabone text-white text-start font-bold'>
            Find the Perfect Gift for Every Occasion
          </h2>
          <p className='text-sm md:text-md text-white mt-4 font-helvetica'>
            Whether it’s a birthday, anniversary, or just because we make –  gifting simple and special
          </p>
          <div className='mt-4'>
            <button className='px-6 py-4 bg-white font-helvetica font-bold text-lg text-purple-500 rounded-full shadow-md hover:bg-purple-500 hover:text-white cursor-pointer'> <FontAwesomeIcon icon={faGift} /> Get Started</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
