import React from 'react'

const SectionTextContainer = ({header, text, description, span}) => {
  return (
    <div className="z-10 w-[450px] lg:w-[600px] mb-12">
        <p className="text-center uppercase text-sm font-bodoni text-gray-700">{header}</p>
        <h3 className="text-2xl text-center font-bold text-gray-600 lg:text-4xl capitalize ">{text}<span className='text-purple-500'>{span}</span> </h3>
        <p className="text-xs text-center font-helvetica lg:text-sm text-gray-700">{description}</p>
    </div>
  )
}

export default SectionTextContainer