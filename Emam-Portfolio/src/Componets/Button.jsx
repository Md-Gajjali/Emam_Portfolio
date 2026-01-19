import React, { children } from 'react'

const Button = ({children , className}) => {
  return (
    <div className={`${className} py-2 px-8  text-black border-DarkBlue border   rounded-2xl text-[20px]  `}>
      {children}
    </div>
  )
}

export default Button
