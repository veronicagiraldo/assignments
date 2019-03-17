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
        axios.get('/bounty').then(res => {
            // console.log(res.data)
            this.setState({
                bounties: res.data
            })
        })
    }
// Post 
    postBounty = newBounty => {
        axios.post('/bounty', newBounty).then(res => {
            this.setState(prevState => ({
                bounties: [...prevState.bounties, res.data]
            }))
        })
    }
// put
    editBounty = (id, updatedBounty) => {
        axios.put(`/bounty/${id}`).then(res => {
            // this.setState(prevState => {(
            //     // bounties: prevState.bounties.map(bounties => bounties._id === id ? bounties = updatedBounty: bounties)
            // )})
        })
    }


// Delete 
    deleteBounty = (id) => {
        axios.delete(`/bounty/${id}`).then ( res => {
            this.setState(prevState => {(
                prevState.bounties.filter(bounties => bounties._id !==id)
            )})
        })
    }

    // componentDidMount(){
    //     // console.log("hello")
    //     this.getBounty();
    // }
    render(){
        return(
            <Provider value ={{
                getBounty: this.getBounty,
                postBounty: this.postBounty,
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

