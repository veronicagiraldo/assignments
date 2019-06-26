import React from 'react';

class Weather extends React.Component{
  constructor(){
    super()
    this.state={
      weather: [],
      // zipCode: '',
    }
  }
  componentDidMount(){
    this.getWeather();
    // this.getZip();
  }
  getWeather = () => {
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=5b3ba95fff4718889e5a163b615f1a26')
    .then(response => response.json()) 
    .then(response => {
      console.log(response)
        this.setState ({ weather: response})
      })
  }
  // getZip = () => {
  //   fetch(`api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}`)
  //   .then(response => response.json())  
  //   .then(response=> {
  //       console.log(response)
  //       this.setState({
  //         zipCode: response 
  //       })
  //     })
  // }

  render(){
    return(
      <div>
        Weather api
        
      </div>
    )
  }
}
export default Weather;