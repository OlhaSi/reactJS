import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div className="infoWeather">
                {this.props.city && !this.props.error &&
                <div>
                    <p>Location: {this.props.city}, {this.props.country} </p>
                    <p>Temperature: {this.props.temp}</p>
                    <p>Feels like: {this.props.feelsLike}</p>
                    <p>Sunset: {this.props.sunset}</p>
                </div>
                }
                <p className="error"> {this.props.error} </p>
            </div>
        );
    }
}

export default Weather;
