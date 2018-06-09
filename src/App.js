import React, { Component } from 'react';

// import './App.css';
import './style.css';
import FinderHeading from './component/finderheading';
import Form from './component/form';
import Weather from './component/weather';

const API_KEY = "b9ddec8c8114c2ce94cc1a28453f5407";




class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""

      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter Valid values"

      })
    }
  }
  render() {
    return (
      <div className="bg" id="divId">

        <h1 className="text-center">Weather Finder Application</h1>
       
        <FinderHeading />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error} />

      </div>
    );
  }
}

export default App;
