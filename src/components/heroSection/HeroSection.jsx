import React from 'react'
import './heroSection.css'

const HeroSection = () => {
  return (
    <div className='herosection-container'>
      <img src="https://placekitten.com/g/200/300" alt="" />
      <h2>overcats clouds</h2>
      <div className='temprature'>
            <h2>Temprature</h2>
            <span>10C to 15C</span>
      </div>
      <div className='temprature-details'>
            <h4>Humidity</h4>
            <span>78%</span>
            <h4>Pressure</h4>
            <span>1008.23</span>
      </div>
    </div>
  )
}

export default HeroSection