import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Flex from './Flex'
import ClientCard from './ClientCard'
import testimonial1 from '../assets/testimonial1.png'
import testimonial2 from '../assets/testimonial2.png'

const Client = () => {
  return (
    <div className='mt-50'>
      <Container>
        <Heading 
            title='My clients say' 
            Header='Testimonials' 
        />
        <Flex className='mt-30 gap-30 justify-center'>
            <ClientCard 
            imgSrc={testimonial1} 
            heading='Jhon doe' 
            title='A really good job, all aspects of the project were done well. Very creative and thoughtful. I was very impressed and would recommend this to anyone'  />
            <ClientCard 
            imgSrc={testimonial2} 
            heading='Ada Hill' 
            title='A really good job, all aspects of the project were done well. Very creative and thoughtful. I was very impressed and would recommend this to anyone'  />
            
        </Flex>
      </Container>
    </div>
  )
}

export default Client
