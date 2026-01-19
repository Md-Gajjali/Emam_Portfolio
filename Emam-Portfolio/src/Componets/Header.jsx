import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaMoon } from "react-icons/fa6";
import ShinyText from './ShinyText';
const Header = () => {
  return (
    <div className=' mt-10'>
      <Container>
        <Flex className='items-center justify-between'>
            <div>       
                <h3 className='text-DarkBlue font-bold text-[20px] '>
                  <ShinyText
                    text="✨Gajjali"
                    speed={2}
                    delay={0}
                    color="#A395E9"
                    shineColor="#ffffff"
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                    disabled={false}
                  />
                </h3>
            </div>
            <div>
                <FaMoon className='text-DarkBlue text-[20px]'/>
            </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Header
