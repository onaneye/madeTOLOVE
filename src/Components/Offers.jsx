import { pricing } from './constant';
import PriceCard from './PriceCard';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';

const Offers = () => {
  return (
    <section className='mt-24' id='pricing'>
      <motion.div
        className="flex flex-col justify-center items-center px-3"
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, delay: 0.7 }}
      >
        <p className="text-center uppercase text-xs sm:text-sm font-bodoni text-gray-700">Our Offers</p>
        <h3 className="text-lg sm:text-xl md:text-2xl text-center font-bold text-gray-600 font-bodoni lg:text-4xl uppercase py-5">
          Check out for <span className='text-purple-500'>pricing</span>
        </h3>
      </motion.div>
      <div className='p-5 md:p-10'>
        <motion.div
          className='columns-1 sm:columns-2 lg:columns-4 width-container gap-2 mt-12'
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, delay: 0.7 }}
       >
        {pricing.map((item, index) => (
          <div key={item.id} className={`${index !== 0 ? 'mt-5' : ''}`}>
            <PriceCard {...item} />
          </div>
        ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Offers;
