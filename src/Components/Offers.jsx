import {pricing} from './constant'
import PriceCard from './PriceCard'

const Offers = () => {
  return (
    <div className='mt-24'>
        <div className="flex flex-col justify-center items-center">
            <p className="text-center  uppercase text-sm font-bodoni text-gray-700">Our Offers</p>
            <h3 className="text-3xl text-center  font-bold text-purple-500 font-bodoni lg:text-4xl capitalize">Check out for pricing</h3>
        </div>
        <div className='md:grid md:grid-cols-2 md:gap-2 lg:flex justify-center width-container gap-4 mt-12'>
            
            {pricing.map((item)=>(
                <PriceCard {...item} />
            ))}
        </div>
    </div>
  )
}

export default Offers