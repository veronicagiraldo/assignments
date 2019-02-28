import React, {Component} from 'react';
import Badges from './Badge'; 

class Form extends Component {
    constructor() {
        super();
        this.state = {
            input: {
                firstName: '',
                lastName: '',
                email: '',
                birth: '',
                phone: '', 
                fav: '',
                about: ''
            },
            badges : []

        }
    
    }
    
    handleChange = e => {
        const {name, value} = e.target 
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs, [name]: value
                }
        }
        
        })
    }


    handleSubmit = e => {
        console.log(e)
        e.preventDefault()
        this.setState((prevState) => {
            return {
                badges: [prevState.inputs, ...prevState.badges],
                inputs: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    birth: '',
                    phone: '',
                    favFood: '',
                    about: '',
                },
            }
        })
    }

        
    render () {

        let {firstName, lastName, email, birth, phone, favFood, about} =this.state
        const mappedBadges = this.state.badges.map((badge, i) => <Badges key = {badge.firstName + i} badge ={badge} />)
      
        return (
            
            <React.Fragment>
               
            <form onSubmit = {this.handleSubmit}>
            <input type ='text' name = 'firstName' placeholder = 'First Name' value = {firstName} onChange = {this.handleChange} />
            <input type ='text' name = 'lastName' placeholder = 'Last Name' value = {lastName} onChange = {this.handleChange} />
            <input type ='text' name = 'email' placeholder = 'Email Address' value = {email} onChange = {this.handleChange} />
            <input type ='text' name = 'birth' placeholder = 'Place of Birth' value = {birth} onChange = {this.handleChange} />
            <input type ='text' name = 'phone' placeholder = 'Phone Number' value = {phone} onChange = {this.handleChange} />
            <input type ='text' name = 'favFood' placeholder = 'Favorite Food' value = {favFood} onChange = {this.handleChange} />
            <input type ='text' name = 'about' placeholder = 'About Me' value = {about} onChange = {this.handleChange} />
            <button>Submit</button>
            </form>
         
        
            {mappedBadges}
            
        
        </React.Fragment>
        )
      
    }
}

export default Form 

