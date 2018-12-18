import React, { Component } from 'react';
import "./App.css";
import Signup from "./Components/auth/Signup";
import Login from "./Components/auth/Login";
import AuthService from "./Components/auth/AuthService";

import { Route, Link, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";

import Protocolo from './Components/Protocolos/Protocolo'
import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';
import MapPage from './Components/Map/MapPage';




class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

   backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
   };

  render() {
    let backdrop;
    
    
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
          const welcome = this.state.user ? (
            <div>
              <p>Hola {this.state.user.username}</p>
              <button onClick={this.logout}>Logout</button>
              <MapPage>Mapa</MapPage>
             
            </div>
          ) : (
            <div>
              <p>No user</p>
              <Link to="/">Home</Link> - <Link to="/signup">Signup</Link> -{" "}
              <Link to="/login">Login</Link> -{" "}
              <Link to="/Map">Map</Link> -{" "}
              <Link to="/Protocolo">Protocolos</Link>
              

            </div>
          );

    return (
               <div style={{height: '100%'}}>
              <div className="App">
                {welcome}
               <Switch>     
                <Route path="/signup" render={() => <Signup getUser={this.getUser} />}/>
                <Route path="/login" render={() => <Login getUser={this.getUser} />} />
                <Route exact path="/Map" component={MapPage} />
                <Route exact path="/" component={Home} />
                <Route exact path="/Protocolo" component={Protocolo} />
                </Switch>
              </div>
              
        {/* <Home /> */}
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} /> 
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop: '64px'}}>
        
        </main> 
      </div>
    );
  }
}

export default App;








// class App extends Component {
//   constructor() {
//     super();
    
//     this.state = {
//       user: null
//     };
    
//     this.authService = new AuthService();
    
//     this.fetchUser();
//   }
  
//   fetchUser = () => {
//     this.authService
//     .loggedin()
//     .then(user => this.setState({ ...this.state, user }));
//   };
  
//   getUser = user => {
//     this.setState({ ...this.state, user });
//   };
  
//   logout = () => {
//     this.authService
//     .logout()
//     .then(() => this.setState({ ...this.state, user: null }));
//   };
  
//   render() {
    
//     return (
//     );
//   }
// }

// export default App;
  

