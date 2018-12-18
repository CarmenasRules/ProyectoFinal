import React, { Component } from 'react';
import AuthService from './AuthService';
import './login.css'
import logo from '../../img/electricar2.jpg'
export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }

    this.authService = new AuthService();
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    const {username, password} = this.state;

    this.authService.login({username, password})
    .then(user => this.props.getUser(user));
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    this.setState({[name]: value});
  }

  render() {
    return (
      <div class="login">
      {/* <img src={logo} /> */}
        <h2>Login</h2>
        <form onSubmit={this.handleFormSubmit}>
          <label class="username">Username</label>
          <input type="text" name="username" onChange={e => this.handleChange(e)} />
<br></br>
<br></br>
          <label>Password</label>
          <input type="password" name="password" onChange={e => this.handleChange(e)} />

          <input type="submit" value="Login"/>
        </form>
      </div>
    )
  }
}