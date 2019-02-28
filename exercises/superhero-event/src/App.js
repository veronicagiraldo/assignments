import React, {Component} from 'react';
import Superhero from './Superhero';
import data from './superhero.json';
import './style.css';

class App extends Component {
    
    sayCatchPhrase = (catchPhrase) => {
        alert(catchPhrase)
        
    }

    render(){
        
        const mappedSuperHeros = data.superHeros.map((hero, i) => 
                <Superhero   
                    key={i} 
                    sayCatchPhrase={this.sayCatchPhrase}
                    name={hero.name} 
                    images={hero.images} 
                    catchPhrase={hero.catchPhrase}
                    
            />)
    
            
            return (
                <div>
                    {mappedSuperHeros}
                </div>
            )
    }
    
}


export default App