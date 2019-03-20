import React, {Component} from 'react';
import axios from 'axios';
const { Provider, Consumer} = React.createContext()

class GlobalProvider extends Component {
    constructor(){
        super()
        this.state = {
                bounties:[]
        }
    }
// Get 
    getBounty = () => {
        // console.log("hello")
        axios.get('/bounty').then(res => {
            // console.log(res.data)
            this.setState({
                bounties: res.data
            })
        })
    }
// Post -this must match the server schema
    postBounty = newBounty => {
        // console.log(this.state)
        axios.post('/bounty', newBounty).then(res => {
            this.setState(prevState => ({
                bounties: [...prevState.bounties, newBounty]
            }))
        })
    }
// put
    editBounty = (_id, updatedBounty) => {
        axios.put(`/bounty/${_id}`, updatedBounty).then(res => {
            this.setState(prevState => ({
                bounties: prevState.bounties.map(bounty => bounty._id === _id ? bounty = res.data : bounty)
            }))
            .catch(err => console.log(err))
        })
    }
// Delete 
    deleteBounty = (id) => {
        axios.delete(`/bounty/${id}`).then ( res => {
            this.setState(prevState => ({
                bounties: prevState.bounties.filter(bounty => bounty._id !==id)
            }))
        })
    }

    render(){
        return(
            <Provider value ={{
                getBounty: this.getBounty,
                postBounty: this.postBounty,
                editBounty: this.editBounty,
                deleteBounty: this.deleteBounty,
                ...this.state
            }}>
            {this.props.children}
            </Provider>
        );
    }
}
export default GlobalProvider;

export function withGlobal (C) {
    return props => <Consumer>
                    {value => <C {...value}{...props}/>}
                     </Consumer>
}

