import React from "react";


export default function SearchEngine(){

    function updateCity() {
        
    }
    function handleWeatherSearch(){

    }
    return(
        <div className="search-engine">
            <form onSubmit={handleWeatherSearch}>
                <input type="search" onClick={updateCity} placeholder="Enter city..." />
                <button type="submit">search</button>
            </form>
        </div>
    );
}