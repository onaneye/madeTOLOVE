import { serviceImg1, serviceImg2, serviceImg3 } from "../images"
import Card from "./Card"

export const ServiceCard = () => {
  return (
    <div className='width-container lg:flex justify-center items-center gap-2 mt-24'>
        <div className="md:grid md:grid-cols-2 md:mb-3 md:gap-2 md:space-y-0 lg:flex flex-col  space-y-3 h-1/2">
            <Card imgSrc={serviceImg1} title='Special occcasions' description='Lorem, ipsum dolor sit amet consecte' styles='lg:w-[500px] rounded-xl h-[305px] bg-purple-200 '/>
            <Card imgSrc={serviceImg2} title='Christmas gifiting' description='Lorem, ipsum dolor sit amet consecte' styles='lg:w-[500px] rounded-xl h-[305px] bg-purple-200 '/>
        </div>
        <div className="mt-4 md:mt-0">
            <Card imgSrc={serviceImg3} title='Relationship goals' description='Lorem, ipsum dolor sit amet consecte' styles='lg:w-[500px]' />
        </div>       
    </div>
  )
}
