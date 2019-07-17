import React from 'react';

class Weather extends React.Component{
  constructor(props){
    super(props)
    this.state={
      weather: [],
      
     
    }
  }
  // fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=5b3ba95fff4718889e5a163b615f1a26')
  componentDidMount(){
    this.getWeather();
    // this.getZip();
  }
  getWeather = (e) => {
    e.preventDefault();
    let zipCode = e.target.elements.zipCode.value;
    let country = e.target.elements.country.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${country}&APPID=5b3ba95fff4718889e5a163b615f1a26`)
    .then(response => response.json()) 
    .then(response => {
      console.log(response)
        this.setState ({ 
          weather: response
        })
      })
  }

  render(){
    return(
      <div>
        Weather api
        
      </div>
    )
  }
}
export default Weather;