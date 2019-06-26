import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      items: [],
      isLoaded: false,
    }
  }
    componentDidMount(){
      Axios.get('https://pdqweb.azurewebsites.net/api/brain')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json,
          })
        });
    }
    render(){
  
      const {isLoaded, items}= this.state;
      if(!isLoaded){
        return <div>Loading...</div>;
      }
      else {
        return(
          <div>
           <ul>
             {items.map(item =>(
               <li key={item.name}>
               Name: {item.name} |
               </li>
             ))}
           </ul>
          </div>
        )
      }
     
    }
  }
  export default App;
  
