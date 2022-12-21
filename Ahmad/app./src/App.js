
import React from "react";
import { useState } from 'react'
import "./App.css";
import axios from 'axios'
import Incoming from "./component/IncomingWeather";
import Search from "./component/Search";
import Center from "./component/WeatherNow";

function App() {
  const url=`https://api.openweathermap.org/data/2.5/weather?q=(city)&appid=77e5a26545096dd883ae929c15c08bea`
  
  const [weather, setWeather] = useState('');
    const [city, setCity] = useState('');
    const apiKey = process.env.REACT_APP_APIKEY;

    const apiCall = async (e) => {
        e.preventDefault()
        const loc = e.target.elements.loc.value
        const url = `https://api.openweathermap.org/data/2.5/weather?q=(city)&appid=77e5a26545096dd883ae929c15c08bea`;
        const req = axios.get(url);
        const res = await req;
        setWeather({
            descp: res.data.weather[0].description,
            temp: res.data.main.temp,
            city: res.data.name,
            humidity: res.data.main.humidity,
            press: res.data.main.pressure,
        })

        setCity(res.data.name)

    }

    //Converting K to C
    let k = weather.temp;
    let C = k - 273.15

    const Weath = () => {
        return <div>
            <div className="winfo">
                Weather information for {city}
                <hr></hr>
            </div>
            <div className="Weath">
                <div className="welement">
                    Weather : {weather.descp}
                </div>
                <div className="welement">
                    Temperature : {C.toFixed(2)} &#8451;
                </div>
                <div className="welement">
                    Humidity :{weather.humidity} %
                </div>
                <div className="welement">
                    Pressure :  {weather.press} mb
                </div>
            </div>
        </div>
    }

  return (
      <div className="app">
        
        <Search />
        <Center />
        <Incoming />
                {/* <form onSubmit={apiCall} className="form">
                    <input type="text" 
                    placeholder="city" 
                    name="loc" />

                    <button className="bttn">Search</button>
                </form>

                {weather && <Weath />} */}
            </div>
  );
}

export default App;