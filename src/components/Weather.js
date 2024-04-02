import React, {useState} from "react";
import axios from 'axios';
import './Weather.css';
import WeatherInfo from "./WeatherInfo";

export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultcity);
   
    function handleResponse(response){  
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
            iconUrl: "",
            date: new Date(response.data.dt * 1000), 
            description: response.data.weather[0].description

        })
    }
    function search(){
        const apiKey ='ab8e7ef210556986d1c9a75d6007b825';
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}
        &appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse); 
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }
    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready){
        return(
            <div className="weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on" onChange={handleCityChange} /> 
                        </div>
                        <div className="col-3">
                        <button type="submit" className="btn btn-primary w-100">search</button>
                        </div>
                    </div>
                </form>
               <WeatherInfo data= {weatherData} />
             
            </div>
        );
    }
    else{    
            search();
    }   
    return ('Loading...');
  
}