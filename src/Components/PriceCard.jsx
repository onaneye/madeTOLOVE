import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const PriceCard = ({tag, price, description, features, active }) => {
  return (
    <div className={`shadow-2xl flex flex-col justify-start gap-4 ${active ? "bg-purple-500" : "bg-white" }  p-4 rounded-md`}>
        <h3 className={`${active ? "text-white": "text-purple-500"} text-sm font-helvetica`}>{tag}</h3>
        <hr />
        <h1 className={`text-3xl font-bold font-helvetica  ${active ? "text-white" : "text-purple-500" }`}> N{price}</h1>
        <p className={`text-sm font-helvetica ${active ? "text-gray-800": "text-gray-600"}`}>{description}</p>
        <hr />
        <div>
            <ul>
                {
                    features.map((item)=>(
                       <li className={`px-2 py-2 font-helvetica ${active ? "text-white": "text-purple-500"}`}><FontAwesomeIcon icon={faCheck} className='mr-2' />{item}</li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default PriceCard