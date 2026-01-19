import React from 'react'
import Header from './Header'
import Heading from './Heading'
import Container from './Container'
import Flex from './Flex'
import MiniCard from './MiniCard'
import { IoRibbon } from "react-icons/io5";
import { PiSuitcaseBold } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import Button from '../Componets/Button'

const About = () => {
  return (
    <div className='mt-40'>
     <Container>
        <Heading title='My Intro' Header='About ME' />

        <Flex className='gap-20 mt-20'>
          <div className='w-80 h-80 bg-DarkBlue rounded-2xl'/>
          <div>
            <Flex className='justify-between gap-10'>
                <MiniCard icon={<IoRibbon />}  
                Heading=' Experience' 
                title='8 Months Working' />

                <MiniCard icon={<PiSuitcaseBold />}  
                Heading=' Completed' 
                title='48+ Projects' />

                <MiniCard icon={<BiSupport />}  
                Heading='Support' 
                title='Online 24/7' />
            </Flex>
            <p className='text-primary w-155 py-9 text-[20px]'>Frontend Developer. I create web pages with UI / UX user interfaces, I have years of experience and many clients are happy with the woek i did.</p>
            <Button className='bg-DarkBlue w-50 px-10 rounded-[9px] '>Contant Me</Button>
          </div>
        </Flex>
     </Container>
    </div>
  )
}

export default About
