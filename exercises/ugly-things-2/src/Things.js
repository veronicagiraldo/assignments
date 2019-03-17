import React from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext()

class Things extends React.Component{
    constructor(){ 
        super()
        this.state = {
            ugly: []
        }
        }
        
        // GET
        getUgly = () => {
            axios.get('https://api.vschool.io/uglyveronica/todo').then (res => {
                console.log("working?")
                this.setState({
                    ugly: res.data
                })
            })
        }
          // POST
          postUgly = newUgly => { 
              axios.post('https://api.vschool.io/uglyveronica/todo', newUgly).then(response => {
                  this.setState(prevState => ({
                      ugly: [...prevState.ugly, response.data]
                     }))
              })
        }
         //  PUT
         editUgly = (id, updatedUgly) => {
             axios.put(`https://api.vschool.io/uglyveronica/todo/${id}`).then(res => { 
                 this.setState(prevState =>({
                     ugly: prevState.ugly.map(ugly => ugly._id === id ? ugly = updatedUgly : ugly)
                 }))
             })
         }
        //  DELETE
        deleteUgly = (id) => {
            axios.delete(`https://api.vschool.io/uglyveronica/todo/${id}`).then (res => {
                this.setState(prevState => {(
                       prevState.ugly.filter(ugly => ugly._id !==id)
                )})
            })
        }

    render(){
        return (
            <Provider value={{
                getUgly: this.getUgly,
                postUgly: this.postUgly,
                editUgly: this.editUgly,
                deleteUgly: this.deleteUgly,
                ...this.state
            }}>
                {this.props.children}
            </Provider>
        );
        }
}   

export default Things
export function withThings (C) {
        return props => <Consumer>
                        {value => <C {...value}{...props} />}
                     </Consumer>
}