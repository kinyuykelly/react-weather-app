import React from "react";

export default function WeatherTemperature(props){
            return(
                <div className="weather-temperature">
                <span className="temperature">{Math.round(props.celcius)}</span>
                 <span className="unit">&deg;C</span> 
                </div>
            );
        }
   