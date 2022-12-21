import cloudy from "../weather-icons/mostlycloudy.svg";

export default function Center()  {
return (
<div id="weather">

    <img src = {cloudy} alt="storm-icon" />
    <h4 ><b>Overcast Clouds</b></h4>
    <h2><b>Temperature</b> 10° to 11°C </h2>
    <h4>Humidity 78% pressure 1008.4</h4>
    
</div>

)
}