import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div class="relative bg-hero bg-cover bg-no-repeat h-screen bg-[right-top_6rem] w-screen">
     <div class="absolute inset-0 bg-purple-gradient">
      <Navbar />
      <div className='width-container h-screen md:h-[80vh] flex flex-col justify-center items-start'>
        <div className='mx-3 w-full sm:w-[550px]'>
          <h2 className='text-xl sm:text-4xl font-bodoni text-white text-start font-bold'>
            Find the Perfect Gift for Every Occasion
          </h2>
          <p className='text-white mt-4 font-helvetica font-bold'>
            Whether it’s a birthday, anniversary, or just because – we make gifting simple and special
          </p>
          <div className='mt-4'>
            <button className='px-6 py-4 bg-white font-helvetica font-bold text-lg text-purple-500 rounded-full shadow-md hover:bg-purple-500 hover:text-white cursor-pointer'>Get Started</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
