import React from 'react';
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "0359602e6a87b3982ec17d3fd4cdb83f";

class App extends React.Component {

    gettingApi = async () => {
        const api_url = await
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${API_KEY}&units=metric`);
        const data = await api_url.json();
    }

    render() {
        return (
            <div>
                <Info/>
                <Form/>
                <Weather/>
            </div>
        );
    }
}

export default App;
