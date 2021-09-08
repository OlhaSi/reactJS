import React from "react";

const Weather = (props) => {
  const {
    data: { temp, city, country, feelsLike, description },
    error,
  } = props;

  return (
    <div className="infoWeather">
      {city && !error && (
        <div>
          <p>
            Location: {city}, {country}
          </p>
          <p>Temperature: {temp}</p>
          <p>Feels like: {feelsLike}</p>
          <p>
            Weather details:{" "}
            {description?.map((el) => el.description).join(",")}
          </p>
        </div>
      )}
      {error && <p className="error"> {error} </p>}
    </div>
  );
};

export default Weather;
