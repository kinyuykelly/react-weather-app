import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
  
function maxTemperature(){
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
}

function minTemperature(){
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
}

function day(){
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun","Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
    return days[day];
}

return(
<div className="weather-forcast-days">
   <div className="weather-forecast-day auto w-50px">{day()}</div>
    <div className="my-2">
     <WeatherIcon code= {props.data.weather[0].icon} size={36}/>
    </div>
    <div className="weather-forecast-temperatures">
    <span className="weather-forecast-temperature-max">{maxTemperature()}&deg;</span>
    <span className="weather-forecast-temperature-min">{minTemperature()}&deg;</span>
     </div>
</div>
);
}