import { testimonials } from './constant'
import ReviewCard from './ReviewCard'
import React, { useState, useEffect } from 'react';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialData] = useState(testimonials);
  const slideInterval = 3000; // Time in milliseconds for each slide

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
      );
    }, slideInterval);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, [testimonialData.length]);

  return (
    <div className='bg-gray-100 mt-24'>
        <div className='width-container flex flex-col justify-evenly gap-24'>
            <div className="flex flex-col justify-center items-center py-6">
                <p className="text-center  uppercase text-sm font-bodoni text-gray-700">Testimonials</p>
                <h3 className="text-3xl text-center  font-bold text-purple-500 font-bodoni lg:text-4xl capitalize">Over 1000+ people trust us</h3>
            </div>
            <div className="container mx-auto lg:w-full  relative overflow-hidden">
            <div
               className="flex lg:w-full transition-transform duration-500 ease-in-out"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {testimonialData.map((item, index) => (
                  <div key={index} className="min-w-full">
                    <ReviewCard {...item} />
                  </div>
                ))}
            </div>
    </div>
        </div>
    </div>
  )
}

export default Testimonial