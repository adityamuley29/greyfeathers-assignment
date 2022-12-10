import React from 'react'

const NavigationButton = (props) => {
  return (
    <div className='navigationButton'>
        <span>{props.name}</span>
        <span>{">"}</span>
    </div>
  )
}

export default NavigationButton