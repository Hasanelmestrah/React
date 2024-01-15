import React, { useEffect, useState } from 'react'
import './heroSection.css'

const HeroSection = (props) => {
  
  // const desc = props.listData.list[0].weather[0].description;
  // const Mintemp = props.listData.list[0].main.temp_min
  // const Maxtemp = props.listData.list[0].main.temp_min
  // const humidity = props.listData.main.humidity;
  // // const temprature = props.listData.main.temprature;
  // const pressure = props.listData.main.pressure


  // console.log(props);
  // console.log(desc);
  // console.log(desc, Mintemp);


  // function kelvinToCelsius() {
  //   return Math.round(props.data.main.temp_min - 273.15);
  // }

  return (
    <div className='herosection-container'>
      <img src="https://placekitten.com/g/200/300" alt="" />
      {/* <h2>{desc}</h2> */}
      <div className='temprature'>
        <h2>Temprature</h2>
        {/* <span>{Mintemp} to {Maxtemp}</span> */}
      </div>
      <div className='temprature-details'>
        <h4>Humidity</h4>
        {/* <span>{props.data.main.humidity}</span> */}
        <h4>Pressure</h4>
        {/* <span>{props.data.main.pressure}</span> */}
      </div>
    </div>
  )
}

export default HeroSection