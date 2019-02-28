import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state={
            firstName: '',
            lastName: '',
            names: []
        }
    }
    handleInput= (e) => {
        this.setState({
           [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.setState((prevState) => { 
        const {firstName, lastName} = prevState
          return {
                firstName: '',
                lastName: '',
                names: [{firstName, lastName},...prevState.names] 
          }
      })
      
    }

    render() {

        const mappedName = this.state.names.map((name, i) => {
            return <li key={i}> {name.firstName} {name.lastName}</li>
        })
    
        
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            
                
                    First Name:
                    <input  type="text"
                            value={this.state.firstName}
                            name = 'firstName'
                            placeholder = 'First Name'
                            onChange={this.handleInput}
                    />
                
                    Last Name:
                    <input  type="text"
                            value={this.state.lastName}
                            name = 'lastName'
                            placeholder = 'Last Name'
                            onChange={this.handleInput}
                    />
                    
                    <button>submit</button>
            
                 </form>
            <ul>
            {mappedName}
            </ul>
            </div>
    
        )
    }
}  
export default App;