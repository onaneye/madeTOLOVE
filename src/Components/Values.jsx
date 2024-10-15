import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { values } from "./constant"



export const Values = () => {
  return (
    <div className='bg-white py-4 width-container shadow-sm rounded-lg'>
        <div className='md:flex justify-between items-center px-4'>
            {values.map((value)=>(
                <div key={value.id} className="py-2 flex flex-col items-center">
                    <div className="rounded-full bg-purple-500 p-3 w-12 h-12 flex justify-center">
                    <FontAwesomeIcon icon={value.icon} className="text-white text-center text-lg"/>
                    </div>
                    <p className="text-xs text-purple-500 font-helvetica text-center p-2">{value.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Values;
