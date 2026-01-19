import React, { children } from 'react'

const Button = ({children , className}) => {
  return (
    <div className={`${className} py-4 px-4 text-black border-DarkBlue border-2   rounded-2xl text-2xl  `}>
      {children}
    </div>
  )
}

export default Button
