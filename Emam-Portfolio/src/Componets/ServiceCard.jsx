import React from 'react'
import Button from './Button'

const ServiceCard = ({heading,btn}) => {
  return (
    <div className='w-86 py-10 px-5 backdrop-blur-2xl cursor-pointer bg-white/5 text-center rounded-2xl  '>
        <div className=' text-start'>
            <h3 className='w-80 text-white text-2xl mt-10'>{heading}</h3>
            <Button className='w-40 text-DarkBlue! mt-7   border-none text-justify'>{btn}</Button>
        </div>
    </div>
  )
}

export default ServiceCard
