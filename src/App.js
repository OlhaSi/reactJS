import React, { useState } from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "0359602e6a87b3982ec17d3fd4cdb83f";

const App = () => {
  const [temp, setTemp] = useState(undefined);
  const [city, setCity] = useState(undefined);
  const [country, setCountry] = useState(undefined);
  const [feelsLike, setFeelsLike] = useState(undefined);
  const [sunset, setSunset] = useState(undefined);
  const [error, setError] = useState(undefined);

  const gettingApi = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      ).then((value) => value.json());

      // to check if the city name is correct
      if (data?.cod === 200) {
        // data && data.cod

        // transform sunset time
        let sunset = data.sys.sunset;
        let timeSunset = new Date();
        timeSunset.setTime(sunset);
        let sunsetTime = `${timeSunset.getHours()}:${timeSunset.getMinutes()}:${timeSunset.getSeconds()}`;

        // get data from the city that user typed
        setTemp(data.main.temp);
        setCity(data.name);
        setCountry(data.sys.country);
        setFeelsLike(data.main.feels_like);
        setSunset(sunsetTime);
        setError(undefined);
      } else {
        setTemp(undefined);
        setCity(undefined);
        setCountry(undefined);
        setFeelsLike(undefined);
        setSunset(undefined);
        setError(
          "City not found. " + "Please check the city name and try again."
        );
      }
    } else {
      // error state if no city typed
      setTemp(undefined);
      setCity(undefined);
      setCountry(undefined);
      setFeelsLike(undefined);
      setSunset(undefined);
      setError("Please type the city name");
    }
  };

  return (
    <div className="wrapper">
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 info">
              <Info />
            </div>

            <div className="col-sm-7 form">
              <Form weatherMethod={gettingApi} />
              <Weather
                temp={temp}
                city={city}
                country={country}
                feelsLike={feelsLike}
                sunset={sunset}
                error={error}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
