import { faArrowCircleRight} from "@fortawesome/free-solid-svg-icons/faArrowCircleRight";
import { box, skin } from "../images";
import Button from "./Button";

const About = () => {
  return (
    <>
    <div className='width-container lg:flex justify-center items-center gap-2 relative'>
      <div className="relative w-full">
      <img src={skin} alt="box" className="md:block absolute top-64 lg:left-64 z-0 opacity-40" loading="lazy" />
      <img src={box} alt="box" className=" w-full z-10 relative " loading="lazy" />
      </div>
      <div className="z-10">
        <p className="text-center lg:text-start uppercase text-sm font-bodoni text-gray-700">About us</p>
        <h3 className="text-3xl text-center lg:text-start font-bold text-purple-500 font-alfaSlabOne lg:text-4xl capitalize">We are made 2 love</h3>
        <p className="text-xs text-center lg:text-start font-helvetica lg:text-sm  text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deleniti consequatur numquam voluptates vitae officiis dolore perspiciatis veritatis id tempora atque nemo minima cumque voluptate reprehenderit perferendis, culpa ea quaerat.</p>
        <Button text="Learn More" icon={faArrowCircleRight} styles='bg-purple-500 py-4 rounded-full px-6 text-white font-helvetica font-normal' />
      </div>
      <img src={skin} alt="box" className=" absolute top-0 left-0 z-0 w-[300px] opacity-30" loading="lazy" />
    </div>
    </>
  )
}

export default About;