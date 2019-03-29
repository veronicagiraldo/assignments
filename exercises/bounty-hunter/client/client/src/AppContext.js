import React, {Component} from 'react';
import axios from 'axios'

const AppContext = React.createContext();

const todoAxios = axios.create()

todoAxios.interceptors.request.use( config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
})
export class AppContextProvider extends Component{
  constructor(){
    super()
    this.state={
      bounty: [],
      user: JSON.parse(localStorage.getItem('user')) || {},
      token: localStorage.getItem('token') || ''
    }
  }

}



signup = userInfo => {
  return axios.post('/auth/signup', userInfo)
    .then(response => {
      const { user, token } = response.data
      this.setState({
        user,
        token 
      })
      console.log(this.state)
      return response
    })

}
// dont change sign up and login 
// change all get/post/put/delete with todoAxios.post('/dkjfld'kfj')

// render(){
//   return (
//     <AppContextProvider
//       value= {{
//           login: this.login
//           signup:this.signup,
//           ...this.state
//       }}>
//   )
// }

export default withContext(signup)