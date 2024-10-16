import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const ReviewCard = ({name, position, testimonial, img}) => {
  return (
    <div className="md:flex justify-center gap-7 items-center">
        <div className="mx-auto lg:mx-0 w-[400px]  rounded-lg shadow-lg">
            <img src={img} className="w-full  rounded-lg " loading="lazy" alt={name} />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start md:justify-start p-2">
            <div className="rounded-full bg-purple-500 w-16 h-16 flex justify-center items-center p-3 my-3">
                <FontAwesomeIcon icon={faQuoteLeft}  className="text-white text-lg"/>
            </div>
            <h3 className="text-gray-600 font-helvetica text-sm text-center md:text-start lg:w-[400px]">
                {testimonial}
            </h3>
            <div className="flex justify-start">
                <p className="font-bold font-helvetica text-sm">{name}</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard