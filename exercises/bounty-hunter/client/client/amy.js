// import React, {Component} from "react"
// import axios from "axios"
// const {Provider, Consumer} = React.createContext()

// class StateHolder extends Component {
//     constructor(){
//         super()
//         this.state = {
//             bounties: []
//         }
//     }

//     getBounties = () => {
//         axios.get('/bounty').then(res => {
//             this.setState({bounties: res.data})
//         })
//     }
//     //Gets one bounty by id
//     // getBounty = (_id) => {
//     //     axios.get(`/bounty/${_id}`).then(res => {
//     //         console.log(res.data)
//     //     })
//     // }
//     addBounty = (newBounty) => {
//         axios.post("/bounty", newBounty).then(res => {
//             this.setState(prevState => {
//                 return {
//                     bounties: [...prevState.bounties, res.data]
//                 }
//             })

//         })
//     }
//     editBounty = (_id, updatedBounty) => {
//         axios.put(`/bounty/${_id}`, updatedBounty).then(res => {
//             this.setState(prevState => {
//                 return {
//                     bounties: prevState.bounties.map(bounty => bounty._id === _id ? bounty = res.data : bounty)
//                 }
//             })
//         })
//     }
//     deleteBounty = (_id) => {
//         console.log("Delete ran", _id)
//         axios.delete(`/bounty/${_id}`).then(res => {
//             this.setState(prevState => ({
//                 bounties: prevState.bounties.filter(bounty => bounty._id !== _id)
//             }))
//         })
//     }

//     render(){
//         return (
//             <Provider value={{
//                 getBounties: this.getBounties,
//                 getBounty: this.getBounty,
//                 addBounty: this.addBounty,
//                 editBounty: this.editBounty,
//                 deleteBounty: this.deleteBounty,
//                 ...this.state
//             }}>
//                 {this.props.children}
//             </Provider>
//         )
//     }
// }

// export default StateHolder;

// export function withState (C) {
//     return props =>
//         <Consumer>
//             {value => <C {...value}{...props}/>}
//         </Consumer>
// }