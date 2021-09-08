const API_KEY = "0359602e6a87b3982ec17d3fd4cdb83f";

export const getWeatherData = async (city) => {
  if (city) {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    ).then((value) => value.json());

    // to check if the city name is correct
    // data && data.cod
    if (data?.cod === 200) {
      // get data from the city that user typed
      return {
        data: {
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          feelsLike: data.main.feels_like,
          description: data.weather,
        },
        error: undefined,
      };
    } else {
      return {
        data: {},
        error: `City not found. Please check the city name and try again.`,
      };
    }
  } else {
    return { data: {}, error: "Please type the city name" };
  }
};

export default 90;
