import React, { Component } from 'react';
import AuthService from './AuthService';
import './login.css'
import logo from '../../img/mattia-righetti-350134-unsplash.jpg'
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
      <div className="imagencoche">
      <img src={logo} style={{width: "290px" , height:"490px"}}/> 
      </div>

      <div className="usuario">
        <h2>Login</h2>
        <form onSubmit={this.handleFormSubmit}>
          <label class="username">Nombre de usuario  </label>
          <input type="text" name="username" onChange={e => this.handleChange(e)} />
        </form>
      </div>
<br></br>
<br></br>
          <label>Contraseña  </label>
          <input type="password" name="password" onChange={e => this.handleChange(e)} />

          <input type="submit" value="Login"/>
      </div>
    )
  }
}