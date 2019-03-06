import React, { Component } from 'react';
import axios from 'axios';
import './app.css';


class App extends Component {
    constructor(){
        super()
        // calling the information from the axios file
        this.state= {
                name: '', 
                image: '',
                todos:[]
            }
            
        }
 


    // GET- eventlistener/ place where HTTP requests

    async componentDidMount(){
       const response = await axios.get('http://s3.amazonaws.com/v-school/data/hitlist.json')
           response.data[5].image = "https://lumiere-a.akamaihd.net/v1/images/Jabba-The-Hutt_b5a08a70.jpeg?region=0%2C0%2C1200%2C675&width=960"
            this.setState({
                todos: response.data
            })
              
        }
    
      
    

    render(){
        const mappedTodo = this.state.todos.map((todo, i) => {
            return(
                <div key = {i}>
                
                 <img src={todo.image} alt=""/> 
                 <h3>{todo.name}</h3>
                </div>
        
            )
        })
        return(
            <div className="main">
                <div className="container">
                    {/* <img src="https://www.economist.com/sites/default/files/images/print-edition/20170506_BKP001_0.jpg" alt=''/> */}
                    <h1 className='header'> Don Corleone's Hit List </h1>
                
                
                    <div className="items">
                        {mappedTodo}
                    </div>
                    
                    </div>
            </div>
        )
    }
}

export default App