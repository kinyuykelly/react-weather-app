import React, { useState } from "react";

export default function WeatherTemperature(props){
        const [unit, setUnit] = useState("celcius");

        function showFahrenheit(event){
            event.preventDefault();
            setUnit("fahrenheit");
        }

        function showCelcuis(event){
            event.preventDefault();
            setUnit("celcius");
        }

        function fahrenheit(){
            return (props.celcius * 9/5) + 32 ;
       }

        if (unit === "celcius"){
            return(
                <div className="weather-temperature">
                <span className="temperature">{Math.round(props.celcius)}</span>
                 <span className="unit">&deg;C {""} | <a href="/" onClick={showFahrenheit} >F</a></span> 
                </div>
            );
        }
        else{
           return(
            <div className="weather-temperature">
            <span className="temperature">{Math.round(fahrenheit())}</span>
             <span className="unit">&deg;<a href="/" onClick={showCelcuis}>C</a> | {""}F</span> 
            </div>
           );
        }
   
}