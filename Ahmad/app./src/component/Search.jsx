import React from "react";
import { useState } from 'react'


const Search = ({api}) => {


  const [city, setCity] = useState('');

  return (
    <header>
    <form>
        <input onChange={(e)=>{console.log("kjkkjk ",e.target.value);setCity(e.target.value)}}
        placeholder="Enter a country"
        id="input"/>


        <button onClick={(e)=>{e.preventDefault();api(e,city)}}
        id="btn" >
          FIND WEATHER
        </button>
        </form>

    </header>
  );
};
export default Search;