import React, { Component } from 'react';
import AuthService from './AuthService';
import {Redirect} from "react-router-dom";
import "./Signup.css";
// import Checkbox from './Checkbox';
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

    const {username, password, photo} = this.state;

    this.authService.signup({username, password, photo})
    .then(user => {
      this.props.getUser(user)
      this.setState({username: '', password: '', photo: '', redirect: true})
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
        <h2>Signup</h2>
        <div class="signup">
        <form onSubmit={this.handleFormSubmit}>
        <div class="Username">
          <label>Username</label>
          <input type="text" name="username" onChange={e => this.handleChange(e)} />
<div class="password">
        </div>
          <label>Password</label>
          <input type="password" name="password" onChange={e => this.handleChange(e)} />
</div>
{/* <div class="pegatina">
<div className="container">
      <div className="row">
        <div className="col-sm-12"> */}

          {/* <form onSubmit={this.handleFormSubmit}> */}
            {/* {this.createCheckboxes()} */}

            {/* <button className="btn btn-default" type="submit">Save</button> */}
          {/* </form> */}
{/* 
        </div>
      </div>
    </div> */}
{/* </div> */}
<div class="Photo">
          <label>Photo</label>
          <input type="file" name="photo" onChange={e => this.handleChange(e)} />
</div>

          <input type="submit" value="Signup"/>
        </form>
        </div>
      </div>
    )
  }
}