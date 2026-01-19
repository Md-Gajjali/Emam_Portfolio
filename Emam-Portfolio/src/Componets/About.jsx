import React from 'react'
import Header from './Header'
import Heading from './Heading'
import Container from './Container'
import Flex from './Flex'
import MiniCard from './MiniCard'
import { IoRibbon } from "react-icons/io5";


const About = () => {
  return (
    <div className='mt-40'>
     <Container>
        <Heading title='My Intro' Header='About ME' />
        <Flex>
            <div className='w-[40%]'>
                <img src="" alt="" />
            </div>
            <div className='w-[60%]'>
                <MiniCard icon={<IoRibbon />}  Heading=' Experience' title='8 Months Working' />
            </div>
        </Flex>
     </Container>
    </div>
  )
}

export default About
