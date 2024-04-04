import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    function handleResponse(response){
        console.log(response.data);
    }
    let apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
    let longitude = props.coordinates.lon;
    let latitude =  props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse)
    return(
        <div className="weather-forcast mt-3">
            <div className="row">
            <div className="col">
                    <div className="weather-forecast-day auto w-50px">Sun</div>
                    <div className="my-2">
                    <WeatherIcon code= {"01d"} size={36}/>
                    </div>
                    <div className="weather-forecast-temperatures">
                        <span className="weather-forecast-temperature-max">&deg;11</span>
                        <span className="weather-forecast-temperature-min">&deg;8</span>
                    </div>
                </div>
                
            </div>
        </div>
    );
}