import React from 'react';
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "0359602e6a87b3982ec17d3fd4cdb83f";

class App extends React.Component {

    // no data before user types the city name
    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        feelsLike: undefined,
        sunset: undefined,
        error: undefined
    }

    gettingApi = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        if (city) {
            const api_url = await
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();

            // to check if the city name is correct
            if (data?.cod === 200) { // data && data.cod

                /*let sunrise = data.sys.sunrise;
                let timeSunrise = new Date(sunrise);
                // timeSunrise.setTime(sunrise);
                console.log('----SUNRISE----', sunrise, timeSunrise)
                let sunriseTime = `${timeSunrise.getHours()}:${timeSunrise.getMinutes()}:${timeSunrise.getSeconds()}`;*/

                // transform sunset time
                let sunset = data.sys.sunset;
                let timeSunset = new Date();
                timeSunset.setTime(sunset);
                let sunsetTime = `${timeSunset.getHours()}:${timeSunset.getMinutes()}:${timeSunset.getSeconds()}`;

                // get data from the city user typed
                this.setState({
                    temp: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    feelsLike: data.main.feels_like,
                    sunset: sunsetTime,
                    error: undefined
                });
            } else {
                this.setState({
                    temp: undefined,
                    city: undefined,
                    country: undefined,
                    sunrise: undefined,
                    sunset: undefined,
                    error: 'City not found. Please check the city name and try again.'
                });
            }

        } else {
            // error state if no city typed
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                sunrise: undefined,
                sunset: undefined,
                error: "Type the city name"
            })
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="main">

                    <div className="container">
                        <div className="row">

                            <div className="col-sm-5 info">
                                <Info/>
                            </div>

                            <div className="col-sm-7 form">
                                <Form weatherMethod={this.gettingApi}/>
                                <Weather
                                    temp={this.state.temp}
                                    city={this.state.city}
                                    country={this.state.country}
                                    feelsLike={this.state.feelsLike}
                                    sunset={this.state.sunset}
                                    error={this.state.error}
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
