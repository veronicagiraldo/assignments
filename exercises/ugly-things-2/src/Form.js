import React from 'react';
import {withThings} from './Things'
   
   class Form extends React.Component {
       constructor(){
           super()
           this.state={
               title: '',
               description: '',
               imgUrl: ""
           }
       }

        // componentDidMount(){
        //  if(this.props.type === 'edit'){
        //     let {title, description} = this.props.ugly
        //     this.setState({title, description})
        //  }
        // }

       handleChange = e => {
            this.setState({[e.target.name]: e.target.value})
        }
        
        handleSubmit = e => {
            e.preventDefault()
            this.props.type === 'add' ? this.props.postUgly(this.state) : this.props.editUgly(this.props.ugly._id, this.state)
        }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input  type="text"
                            placeholder="title"
                            name="title" 
                            value={this.state.title}
                            onChange={this.handleChange}
                            />
                    <input type="text"
                            placeholder="description"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                            />
                    <input type="text"
                            placeholder="images"
                            name=""
                            value={this.state.imgUrl}
                            onChange={this.handleChange}
                            />
                    <button> Submit</button>
                </form>
            </div>
        )
    }

   }
   export default withThings(Form);
       

        


