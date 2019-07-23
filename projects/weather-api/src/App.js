import React from 'react';
import './App.css';
// import Weather from './Weather';
// import Form from './Form';
import NewForm from './NewForm';
import NewWeather from './NewWeather';
import Titles from './Titles';

class App extends React.Component{
  state={
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  
  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const Api_Key = '5b3ba95fff4718889e5a163b615f1a26';
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const response = await api_call.json();
      if(city && country){
        this.setState({
          temperature: response.main.temp,
          city: response.name,
          humidity: response.main.humidity,
          description: response.weather[0].description,
          error: ""
        })
      }else{
        this.setState({
          error:"Please enter the values..."
        })
      }
      console.log(response)
  }
  render(){
  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
              <Titles />
              <NewWeather
                  temperature={this.state.temperature} 
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                  />
              </div>
              </div>
              <NewForm loadWeather={this.getWeather} />
              <div className="col-xs-7 form-container">
              </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
