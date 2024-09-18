import React, {useState, useEffect} from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false); 
        }, [props.coordinates]);
    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

    function load(){
        let apiKey = "ab8e7ef210556986d1c9a75d6007b825";
        let longitude = props.coordinates.lon;
        let latitude =  props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse)
    }
    if (loaded){
        return(
            <div className="weather-forcast mt-3">
                <div className="row">
                    {forecast.map(function(dailyforecast, index){
                        if (index < 5){
                        return(
                            <div className="col" key={index}>
                            <WeatherForecastDay data={dailyforecast} /> 
                            </div> 
                        );
                    }
                    else{
                        return null
                    }
                    })}
                </div>
            </div>
        );
    }
    else{
       load();
    }
    }
    