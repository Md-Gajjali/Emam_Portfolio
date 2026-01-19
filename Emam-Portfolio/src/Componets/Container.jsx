import React,{children} from 'react'

const Container = ({children,clasName}) => {
  return (
    <div className={`${clasName} container `}>
      {children}
    </div>
  )
}

export default Container
