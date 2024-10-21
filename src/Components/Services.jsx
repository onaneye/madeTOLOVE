import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { personService2 } from '../images';
import { servicesData } from './constant';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';

const OurServices = () => {
  return (
    <section id="services">
      <div className="flex flex-col items-center justify-center py-10 bg-gray-100 mt-24 bg-fixed">
        {/* Section Heading */}
        <motion.div className="z-10 md:w-[450px] lg:w-[600px] mb-12"
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <p className="text-center uppercase text-xs md:text-sm font-bodoni text-gray-700">Our Services</p>
          <h3 className="text-xl sm:text-xl md:text-2xl text-center font-bold text-gray-600 lg:text-4xl uppercase py-5">
          Our deliverables that make your that make your <span className="text-purple-500">gift-giving</span>    experience exceptional include
          </h3>
        </motion.div>

        <div className="lg:flex lg:items-center width-container">
          {/* Left Side - Services */}
          <div className="flex md:flex-row flex-col lg:flex-col md:justify-center lg:justify-between items-center lg:items-end gap-12 lg:gap-24">
            {servicesData.slice(0, 2).map((item) => (
              <motion.div className="flex flex-col items-center w-64 mb-5" key={item.id}
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <div className="flex w-12 h-12 justify-center items-center rounded-full bg-purple-500 mb-3">
                  <FontAwesomeIcon icon={item.icon} className="text-lg text-white" />
                </div>
                <h3 className="text-sm font-semibold font-helvetica text-purple-500">{item.title}</h3>
                <p className="text-xs text-gray-600 text-center font-helvetica">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center - Image */}
          <motion.div className="relative"
            variants={fadeIn('up', 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img 
              src={personService2} 
              alt="Person offering gifting services" 
              className="w-[700px]" 
              loading="lazy" 
            />
          </motion.div>

          {/* Right Side - Services */}
          <div className="flex flex-col justify-between items-center lg:items-end gap-12 lg:gap-24">
            {servicesData.slice(2, 3).map((item) => (
              <motion.div className="flex flex-col items-center w-64 mt-5" key={item.id}
                variants={fadeIn('left', 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <div className="flex w-12 h-12 justify-center items-center rounded-full bg-purple-500 mb-3">
                  <FontAwesomeIcon icon={item.icon} className="text-lg text-white" />
                </div>
                <h3 className="text-sm font-semibold font-helvetica text-purple-500">{item.title}</h3>
                <p className="text-xs text-gray-600 text-center font-helvetica">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
