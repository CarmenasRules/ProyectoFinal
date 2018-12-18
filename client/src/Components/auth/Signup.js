import React, { Component } from 'react';
import AuthService from './AuthService';
import {Redirect} from "react-router-dom";
import "./Signup.css";


export default class Signup extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      photo: '', 
      email: '',   
      coche: '',
      check: '',
                  // CHECKBOXES??   
      redirect: false
    }

    this.authService = new AuthService();
  }
  
  handleFormSubmit = (e) => {
    e.preventDefault();

    let checkboxClicked = document.getElementsByClassName("cero")[0].checked
    console.log(checkboxClicked)

    const {username, password, photo, coche, email, check} = this.state;  // como meto aquí  checkbox??¿¿??

    this.authService.signup({username, password, photo, coche, email, check}) // como meto aquí  checkbox??¿¿??
    .then(user => {
      this.props.getUser(user) //DESCOMENT CUANDO HAYA PUESTO
      this.setState({username: '', password: '', photo: '', coche: '', email: '', check:'', redirect: true}) //checkbox aqui?
    });
  }

  handleChange = (e) => {
    const {name, value, check} = e.target;

    if(name == "photo") {
      this.setState({...this.state, photo: e.target.files[0]})
    } 
      this.setState({...this.state, [name]: value}, () => console.log(this.state));
  }

  render() {
    
    if(this.state && this.state.redirect) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <h1>Signup</h1>
        <div class="signup">
        <form onSubmit={this.handleFormSubmit}>
          
          <h2>Usuario</h2>
          <div class="Username">
            <label>Nombre y apellido  </label>
            <input  type="text" name="username" onChange={e => this.handleChange(e)} />
          </div>  

          <div class="password">
            <label>Contraseña  </label>
            <input type="password" name="password" onChange={e => this.handleChange(e)} />
          </div>

          <div class="password">
            <label>Email  </label>
            <input type="email" name="email" onChange={e => this.handleChange(e)} />
          </div>

          <div class="Photo">
          <label>Foto de perfil   </label>
          <input type="file" name="photo" onChange={e => this.handleChange(e)} />
        </div>



          <h2>Coche</h2>
          <div class="coche">
            <label>Coche  </label>
            <input type="text" name="coche" onChange={e => this.handleChange(e)} />
          </div>


          <div> 
            <h2>Distintivo ambiental</h2>
            <label>CERO</label> 
            <input className="cero" type="checkbox" name="check" value="Cero" onChange={e => this.handleChange(e)} />

            <label>  ECO</label> 
            <input type="checkbox" name="check" value="Eco" onChange={e => this.handleChange(e)} />

            <label>  C</label> 
            <input type="checkbox" name="check" value="C" onChange={e => this.handleChange(e)} />

            <label>  B</label> 
            <input type="checkbox" name="check" value="B" onChange={e => this.handleChange(e)} />
          </div>

          <input type="submit" value="Signup"/>
        </form>
        </div>
      </div>
    )
  }
}
