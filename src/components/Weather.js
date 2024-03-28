import React, {useState} from "react";
import axios from 'axios';
import './Weather.css';

export default function Weather(props){
    const [temperature, setTemperature] = useState(null);
    const [weatherData, setWeatherData] = useState({ready: false});
   
    function handleResponse(response){  
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            precipitation: "e",
            wind: response.data.wind.speed,
            city: response.data.name,
            iconUrl: "",
            date: "Wednesday 02:30", 
            description: response.data.weather[0].description

        })
        setTemperature(response.data.main.temp)
    }
    if (weatherData.ready){
        return(
            <div className="weather">
                <form onSubmit={handleResponse}>
                    <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on" /> 
                        </div>
                        <div className="col-3">
                        <button type="submit" className="btn btn-primary w-100">search</button>
                        </div>
                    </div>
                </form>
               <h1>{weatherData.city}</h1>
               <ul>
               <li>{weatherData.date}</li>
               <li className="text-capitalize">{weatherData.description}</li>
               </ul>
                <div className="row mt-3">
                    <div className="col-6 flex">
                        <div className="clearfix">
                        <img src={weatherData.iconUrl}  alt="mostly-cloudy" className="float-left" />
                      <span className="temperature">{Math.round(weatherData.temperature)}</span>
                        <span className="unit">&deg;C</span>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                        <li>Precipitation: {weatherData.Precipitation}%</li>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind}km/hr</li>
                        </ul>
                    </div>
                </div>
             
            </div>
        );
    }
    else{
        let city = 'New York';
        const apiKey ='ab8e7ef210556986d1c9a75d6007b825';
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse); 
    }
    return ('Loading...');
  
}