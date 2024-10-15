import { serviceImg1, serviceImg2, serviceImg3 } from "../images"
import Card from "./Card"
import { motion } from 'framer-motion';
import { fadeIn } from './variants';

export const ServiceCard = () => {
  return (
    <div className='width-container lg:flex justify-center items-center gap-2 mt-48'>
        <motion.div className="md:grid md:grid-cols-2 md:mb-3 md:gap-2 md:space-y-0 lg:flex flex-col  space-y-3 h-1/2"
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}
        >
            <Card imgSrc={serviceImg1} title='Special occcasions' description='Lorem, ipsum dolor sit amet consecte' styles='lg:w-[500px] rounded-xl h-[305px] bg-purple-200'/>
            <Card imgSrc={serviceImg2} title='Christmas gifiting' description='Lorem, ipsum dolor sit amet consecte' styles='lg:w-[500px] rounded-xl h-[305px] bg-purple-200 '/>
        </motion.div>
        <motion.div className="mt-4 md:mt-0"
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}
        >
            <Card imgSrc={serviceImg3} title='Relationship goals' description='Lorem, ipsum dolor sit amet consecte' styles='lg:w-[500px]' />
        </motion.div>       
    </div>
  )
}
