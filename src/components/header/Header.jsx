import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className='header-container'>
      <div className='input-city'>
            <input type="text" placeholder='Search for a City' />
      </div>
      <button className='find-btn'>FIND WEATHER</button>
    </div>
  )
}

export default Header