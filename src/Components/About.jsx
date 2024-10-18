import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons/faArrowCircleRight";
import { box, skin } from "../images";
import Button from "./Button";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <section id="about">
      {/* SEO and Meta Tags for About Section */}
      <Helmet>
        <title>About Made to Love | Gifting Service for Loved Ones</title>
        <meta name="description" content="Learn more about Made to Love, the gifting service that helps you find and deliver the perfect gifts to your loved ones. We take care of everything, from gift selection to delivery." />
        <meta name="keywords" content="gifting service, personalized gifts, gift delivery, Made to Love, surprise gifts" />
        <meta property="og:title" content="About Made to Love" />
        <meta property="og:description" content="Made to Love helps you select and deliver the perfect gifts to your loved ones. Discover how our gifting service works." />
      </Helmet>
      
      <div className='width-container lg:flex justify-center items-center gap-2 relative'>
        <div className="relative w-full">
          <img src={skin} alt="Decorative background" className="md:block absolute top-64 lg:left-64 z-0 opacity-40" loading="lazy" />
          <motion.img src={box} alt="Gift box image" className=" w-full z-10 relative " loading="lazy"
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          />
        </div>

        <motion.div className="z-20 md:w-full md:px-4 lg:w-full"
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <p className="text-center lg:text-start uppercase text-xs sm:text-sm font-bodoni text-gray-700">About us</p>
          <h3 className="text-lg sm:text-xl md:text-2xl text-center lg:text-start font-bold text-gray-600 lg:text-4xl uppercase py-5">
            We are made 2 <span className="text-purple-500">love</span>
          </h3>
          <p className="text-xs text-center lg:text-start font-helvetica lg:text-sm text-gray-600">
            Made to Love is a gifting service designed to take the stress out of choosing the perfect gift. We specialize in personalized, hand-picked presents that are delivered directly to your loved ones. Whether for birthdays, anniversaries, or just because, we ensure that your thoughtful gift makes a lasting impression.
          </p>
          <Button
            text="Learn More"
            icon={faArrowCircleRight}
            styles="bg-purple-500 py-4 rounded-full px-6 text-white font-helvetica font-normal"
            aria-label="Learn more about Made to Love"
          />
        </motion.div>

        <img src={skin} alt="Decorative background" className="absolute top-0 left-0 z-0 w-[300px] opacity-30" loading="lazy" />
      </div>
    </section>
  )
}

export default About;
