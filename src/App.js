import React, { useCallback, useState } from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";
import { getWeatherData } from "./data/weather-fetch";

const App = () => {
  const [dataState, setDataState] = useState({});
  const [errorState, setErrorState] = useState(undefined);

  const onFormSubmit = useCallback(async (e) => {
    e.preventDefault();
    const city = e.target.elements.cityInput.value;
    const { data: nextWeatherData, error: nextError } = await getWeatherData(
      city
    );

    setDataState(nextWeatherData);
    setErrorState(nextError);
  }, []);

  return (
    <div className="wrapper">
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 info">
              <Info />
            </div>
            <div className="col-sm-7 form">
              <Form onSubmit={onFormSubmit} />
              <Weather data={dataState} error={errorState} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
