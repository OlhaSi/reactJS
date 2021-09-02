import React from 'react';

const Weather = props => {

    const {temp, city, country, feelsLike, sunset, error} = props;

    return (
        <div className="infoWeather">
            {city && !error &&
            <div>
                <p>Location: {city}, {country} </p>
                <p>Temperature: {temp}</p>
                <p>Feels like: {feelsLike}</p>
                <p>Sunset: {sunset}</p>
            </div>
            }
            <p className="error"> {error} </p>
        </div>
    );
}

export default Weather;
