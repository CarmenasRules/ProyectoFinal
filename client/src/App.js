import React, { Component } from "react";
import "./App.css";
import Signup from "./Components/auth/Signup";
import Login from "./Components/auth/Login";
import Map from "./Components/Map/Map";
import AuthService from "./Components/auth/AuthService";
import { Route, Link } from "react-router-dom";

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
      </div>
    ) : (
      <div>
        <p>No user</p>
        <Link to="/">Home</Link> - <Link to="/signup">Signup</Link> -{" "}
        <Link to="/login">Login</Link> -{" "}
        <Link to="/Map">Map</Link>
      </div>
    );

    return (
      <div className="App">
        {welcome}
       
        <Route
          path="/signup"
          render={() => <Signup getUser={this.getUser} />}
        />
        <Route path="/login" render={() => <Login getUser={this.getUser} />} />
        <Route exact path="/Map" component={Map} />
      </div>
    );
  }
}

export default App;