import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { values } from "./constant"



export const Values = () => {
  return (
    <div className='hidden bg-white py-4 px-5 width-container shadow-sm'>
        <div className='flex justify-between items-center flex-shrink-0'>
            {values.map((value)=>(
                <div key={value.id} className="py-2 flex flex-col items-center">
                    <div className="rounded-full bg-purple-500 p-4 w-16 h-16 flex justify-center">
                    <FontAwesomeIcon icon={value.icon} className="text-white text-center text-xl"/>
                    </div>
                    <p className="text-sm text-purple-500 font-helvetica text-center p-2">{value.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Values;
