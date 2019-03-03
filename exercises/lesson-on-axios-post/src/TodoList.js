import React, {Component} from 'react';
import axios from './axios';

class TodoList extends Component {
    constructor() {
        super()
        this.state ={
            inputs: {
                title: '',
                description: ''
                },
                todos: []
            }
        }
        


        // GET
        async componentDidMount(){
            const response = await axios.get('URL')
            this.setState({
                todos: response.data
            })
        }
        // POST 

        // editTodo
        

        // DELETE 
        deleteTodo = id => {
            axios.delete(`URL/${id}`).then(response => {
                this.setState(prevState => ({
                    todos: prevState.todos.filter(todo => todo._id !==id)
                }))
                // console.log(response.data)
            })
        }

    render() {
        const mappedTodos = this.state.todos.map(todo => )

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type= "text"
                        placeholder="Todo Title"
                        name="title"

                </form>

            </div>
        )
    }
}
