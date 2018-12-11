import React, { Component } from "react";
import "./App.css";
import Signup from "./Components/auth/Signup";
import Login from "./Components/auth/Login";
import AuthService from "./Components/auth/AuthService";
import Map from './Components/Map/Map';
import { Route, Link, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null
    };

    this.authService = new AuthService();

    this.fetchUser();
  }

  fetchUser = () => {
    this.authService
      .loggedin()
      .then(user => this.setState({ ...this.state, user }));
  };

  getUser = user => {
    this.setState({ ...this.state, user });
  };

  logout = () => {
    this.authService
      .logout()
      .then(() => this.setState({ ...this.state, user: null }));
  };

  render() {
    const welcome = this.state.user ? (
      <div>
        <p>Hola {this.state.user.username}</p>
        <button onClick={this.logout}>Logout</button>
        <Map> Mapa</Map>
      </div>
    ) : (
      <div>
        <p>No user</p>
        <Link to="/">Home</Link> - <Link to="/signup">Signup</Link> -{" "}
        <Link to="/login">Login</Link>
      </div>
    );

    return (
      <div className="App">
        {welcome}
       <Switch>     
        <Route path="/signup" render={() => <Signup getUser={this.getUser} />}/>
        <Route path="/login" render={() => <Login getUser={this.getUser} />} />
        <Route exact path="/Map" component={Map}/>
        </Switch>
      </div>
    );
  }
}

export default App;