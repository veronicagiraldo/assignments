import React from 'react';
import axios from 'axios';

const todoAxios = axios.create();

todoAxios.intercepetors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
})

const AppContext = React.createContext();

export class AppContext extends React.Component{
  constructor(){
    super()
    this.state = {
      list: [],
      user: JSON.parse(localStorage.getItem('user')) || {},
      token: localStorage.getItem('token') || ""
    }
  }
  signup = (userInfo) => {
    return todoAxios.post('/auth/signup', userInfo)
    .then(res => {
      const { user, token } = res.data
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      this.setState({
        user, 
        token
      });
      return res;
    })
  }

  login = (credentials) => {
    return todoAxios.post('/auth/login', credentials)
      .then(res =>{
        const { token, user } = res.data;
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        this.setState({
          user,
          token
        });
        this.getTodos();
        return res;
      })
  }
  logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.setState({
      list: [],
      user: {},
      token: ""
    })
  }
  addTodo = () => {

  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state)
    .then(() => this.props.history.push('/lists'))
  }



  render(){
    return(
      <AppContext.Provider 
        value={{
          signup: this.signup,
          login: this.login,
          logout: this.logout,
        }}
        >
        {this.props.children}
        </AppContext.Provider>
    )
  }
}
export default AppContext;

