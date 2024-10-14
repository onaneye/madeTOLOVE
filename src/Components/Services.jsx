import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {personService} from '../images'
import {servicesData} from './constant'

const OurServices = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-100 mt-24">
      <div className="z-10 w-full lg:w-[600px] mb-12">
        <p className="text-center uppercase text-sm font-bodoni text-gray-700">Our Services</p>
        <h3 className="text-3xl text-center  font-bold text-purple-500 font-bodoni lg:text-4xl capitalize">What we do</h3>
        <p className="text-xs text-center font-helvetica lg:text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deleniti consequatur numquam voluptates vitae officiis.</p>
      </div>
      <div className="lg:flex lg:items-center width-container">
        {/* Service Text Left */}
        <div className='flex md:flex-row flex-col lg:flex-col md:justify-center lg:justify-between items-center lg:tems-end gap-12 lg:gap-24'>
            {servicesData.slice(0, 2).map((item)=>(
                <div className="flex flex-col items-center w-64 mb-5" key={item.id}>
                    <div className="flex w-12 h-12 justify-center items-center rounded-full bg-purple-500 mb-3">
                        <FontAwesomeIcon icon={item.icon} className="text-lg text-white" />
                    </div>
                  <h3 className="text-sm font-semibold font-helvetica text-purple-500">{item.title}</h3>
                  <p className="text-xs text-gray-600 text-center font-helveticar">
                   {item.description}
                  </p>
                </div>     
                ))    
            } 
        </div>          

        {/* Person Image */}
        <div className="relative">
          <img 
            src={personService} 
            alt="Person"
            className="w-[700px]" 
          />
        </div>

        {/* Service Text Right */}
        <div className='flex flex-col justify-between items-center lg:tems-end gap-12 lg:gap-24'>
            {servicesData.slice(2, 3).map((item) =>
                (
                    <div className="flex flex-col items-center w-64 mt-5" key={item.id}>
                        <div className="flex w-12 h-12 justify-center items-center rounded-full bg-purple-500 mb-3">
                            <FontAwesomeIcon icon={item.icon} className="text-lg text-white" />
                        </div>
                      <h3 className="text-sm font-semibold font-helvetica text-purple-500">{item.title}</h3>
                      <p className="text-xs text-gray-600 text-center font-helveticar">
                       {item.description}
                      </p>
                    </div>     
                ))    
            } 
        </div>   
      </div>
    </div>
  );
};

export default OurServices;
