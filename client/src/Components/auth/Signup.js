import React, { Component } from 'react';
import AuthService from './AuthService';
import {Redirect} from "react-router-dom";
import "./Signup.css";
import Checkbox from './Checkbox';
// const items = [
//   'One',
//   'Two',
//   'Three',
// ];

export default class Signup extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      photo: '', 
      email: '',   
      coche: '',
      // CHECKBOXES??   
      redirect: false
    }

    this.authService = new AuthService();
  }
  // componentWillMount = () => {
  //   this.selectedCheckboxes = new Set();
  // }

  // toggleCheckbox = label => {
  //   if (this.selectedCheckboxes.has(label)) {
  //     this.selectedCheckboxes.delete(label);
  //   } else {
  //     this.selectedCheckboxes.add(label);
  //   }
  // }

  // handleFormSubmit = formSubmitEvent => {
  //   formSubmitEvent.preventDefault();

  //   for (const checkbox of this.selectedCheckboxes) {
  //     console.log(checkbox, 'is selected.');
  //   }
  // }

  // createCheckbox = label => (
  //   <Checkbox
  //           label={label}
  //           handleCheckboxChange={this.toggleCheckbox}
  //           key={label}
  //       />
  // )

  // createCheckboxes = () => (
  //   items.map(this.createCheckbox)
  // )

  handleFormSubmit = (e) => {
    e.preventDefault();

    let checkboxClicked = document.getElementsByClassName("cero")[0].checked
    console.log(checkboxClicked)

    const {username, password, photo, coche, email} = this.state;  // como meto aquí  checkbox??¿¿??

    this.authService.signup({username, password, photo, coche, email}) // como meto aquí  checkbox??¿¿??
    .then(user => {
      this.props.getUser(user)
      this.setState({username: '', password: '', photo: '', coche: '', email: '', redirect: true}) //checkbox aqui?
    });
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    if(name == "photo") {
      this.setState({...this.state, photo: e.target.files[0]})
    } else {
      this.setState({...this.state, [name]: value});
    }
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
            <input className="cero" type="checkbox" name="cero" value="Cero" onChange={e => this.handleChange(e)} />

            <label>  ECO</label> 
            <input type="checkbox" name="eco" value="Eco" onChange={e => this.handleChange(e)} />

            <label>  C</label> 
            <input type="checkbox" name="c" value="C" onChange={e => this.handleChange(e)} />

            <label>  B</label> 
            <input type="checkbox" name="b" value="B" onChange={e => this.handleChange(e)} />
          </div>


{/* // 

// <div class="pegatina">
// <div className="container">
//       <div className="row">
//         <div className="col-sm-12">

//           <form onSubmit={this.handleFormSubmit}>
//             {this.createCheckboxes()}

//             <button className="btn btn-default" type="submit">Save</button>
//           </form>

//         </div>
//       </div>
//     </div>
// </div> */}

      

          <input type="submit" value="Signup"/>
        </form>
        </div>
      </div>
    )
  }
}
