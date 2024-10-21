import { motion } from 'framer-motion'
import { fadeIn } from './variants'
import Button from './Button'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <section className='mt-24' id='contact'>
            <div className='width-container'>
            <motion.div className="flex flex-col justify-center items-center px-3"
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                whileInView ={"show"}
                viewport={{once:false, delay: 0.7}}
            >
            <p className="text-center  uppercase text-xs sm:text-sm font-bodoni text-gray-700">Contact Us</p>
            <h3 className="text-lg sm:text-xl md:text-2xl text-center  font-bold text-gray-600 font-bodoni lg:text-4xl uppercase py-5">we are just a <span className='text-purple-500'>Dm</span> Away</h3>
        </ motion.div>
                <div className='md:flex justify-center gap-2'>
                    <Button icon={faWhatsapp} text="Send a Message" styles="bg-green-500 text-white py-4 px-6  hover:bg-green-700 rounded-full shadow-lg" link="https://wa.me/+2347067158130" />
                    <Button icon={faPhone} text="Call us" styles="bg-purple-500 text-white py-4 px-6  hover:bg-purple-900 rounded-full shadow-lg" link={"tel:+2347067158130"} />
                </div>
            </div>
    </section>
  )
}

export default Contact
