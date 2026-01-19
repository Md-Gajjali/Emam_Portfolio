import React from 'react'
import Container from './Container'
import Button from './Button'
import Flex from './Flex'
import img from '../assets/img.png'
const Banner = () => {
  return (
    <div>
      <Container>
          <div className='text-center leading-10 mt-24'>
            <h5 className='text-[16px] text-white'>Hello, i'm</h5>
            <h1 className='text-5xl text-DarkBlue font-bold'>Emam Gajjali</h1>
            <p className='text-[18px] text-primary'>Frontend Developer</p>
                <div className='justify-center mt-10 flex gap-10 '>
                  <Button className='hover:bg-DarkBlue text-DarkBlue! duration-700 ease-in-out hover:text-black! w-40'>Download CV</Button>
                  <Button className='bg-DarkBlue text-black px-2 '>About</Button>
                </div>
              <div className='justify-center mt-10 flex   '>
                <img src={img} alt="" className='w-90 ' />
              </div>
          </div>
      </Container>
    </div>
  )
}

export default Banner
