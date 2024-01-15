import Forecast from './components/foreCast/Forecast';
import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';
import FakerWeather from "../src/components/data/FakerWeather.json"
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState()

  // useEffect(async() => {
  //   const response = fetch('http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=57cf9da04987637a23fcbc26f5356e12'
  //   )
  //   const result = await response.json()

  //   console.log(result);
  // }, [])

  useEffect(() => {
    setData(FakerWeather)
  }, [])

  console.log(data);

  return (
    <div className="App">
      <Header />
      <HeroSection listData={data} />
      <Forecast />
    </div>
  );
}

export default App;
