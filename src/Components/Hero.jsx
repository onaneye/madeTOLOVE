import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons'; 
import { motion } from 'framer-motion';
import { fadeIn } from './variants';
import { heroSlider } from './constant';
import { Helmet } from 'react-helmet';

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [carousel] = useState(heroSlider);
    const timer = 5000;

    useEffect(() => {
      if (carousel.length) {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevState) =>
            prevState === carousel.length - 1 ? 0 : prevState + 1
          );
        }, timer);
    
        return () => clearInterval(intervalId);
      }
    }, [carousel.length, timer]);

  return (
    <section className="relative overflow-hidden min-w-full" id='home'>
      {/* SEO and Open Graph Meta Tags */}
      <Helmet>
        <title>Made to Love | The Perfect Gift for Every Occasion</title>
        <meta name="description" content="Made to Love helps you find the perfect gift for your loved ones. Don't know what to gift? We take care of it and deliver the perfect present." />
        <meta name="keywords" content="gifts, gifting service, presents, gift delivery, personalized gifts, love, special occasion gifts, made to love" />
        <meta property="og:title" content="Made to Love | Gifting Made Easy" />
        <meta property="og:description" content="Surprise your loved ones with the perfect gift from Made to Love. We handle everything—from selecting the gift to delivering it." />
        <meta property="og:image" content={carousel[currentIndex]?.imageUrl || 'default_image_url.jpg'} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://madetolove.netlify.app/" />
        <link rel="preload" as="image" href={carousel[0]?.imageUrl || 'default_image_url.jpg'} />

        {/* JSON-LD for Schema Markup */}
        <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Made to Love",
            "url": "https://madetolove.netlify.app",
            "logo": "https://www.madetolove.com/logo.jpg",
            "sameAs": [
              "https://www.facebook.com/madetolove",
              "https://www.instagram.com/madetolove"
            ],
            "description": "Made to Love helps people find the perfect gifts for their loved ones.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Country Name"
            }
          }
        `}
        </script>
      </Helmet>

      {/* Hero Carousel */}
      <div className='flex items-center transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {carousel.map((slide) => (
          <div className='bg-cover bg-center min-w-full bg-no-repeat h-screen lg:mt-24' style={{ backgroundImage: `url(${slide.imageUrl})` }} key={slide.id}>
            <div className="inset-0 bg-purple-gradient h-full object-cover">
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
                  <motion.div className='mt-4'
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                  >
                    {/* Accessible Button */}
                    <button 
                      className='px-6 py-4 bg-white font-helvetica font-bold text-lg text-purple-500 rounded-full shadow-md hover:bg-purple-500 hover:text-white cursor-pointer'
                      aria-label="Get Started with Made to Love"
                    >
                      <FontAwesomeIcon icon={faGift} /> Get Started
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
