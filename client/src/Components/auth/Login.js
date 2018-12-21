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
      <div className="login">
        <div className="usuario">
          <h2>Login</h2>
          <form className="usuario-form" onSubmit={this.handleFormSubmit}>
            <label className="labelname">Nombre de usuario  </label>
            <input placeholder="Usuario..." type="text" name="username" onChange={e => this.handleChange(e)} />
            <br></br><br></br>
            <label className="labelpass">Contraseña  </label>
            <input placeholder="Contraseña..." type="password" name="password" onChange={e => this.handleChange(e)} />
            <br></br><br></br>
            <input className="botonlogin" type="submit" value="Login" style={{marginTop: '20px'}}/>
          </form>
        </div>
          <img  className="imagencoche" src={logo} alt='coche'/> 
      </div>
    )
  }
}