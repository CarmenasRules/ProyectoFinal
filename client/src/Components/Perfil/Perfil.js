import React, { Component} from 'react';
import "./Perfil.css";





export default class Perfil extends Component {

  constructor(props){
    super(props)
    this.props = props

    this.state = {
              user :  this.props.user
    }
  }

  render() {
    
      
      return (
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {this.props.user && <h2>Hola {this.props.user.username}</h2>}
          <br></br>
          <br></br>
          {this.props.user && <div> <img className="fotoPerfil"src={this.props.user.pictureUrl}></img> </div>} 
         
          <br></br>
          {this.props.user && <h2>Coche: {this.props.user.coche}</h2>}
          {this.props.user && <h2>Distintivo de contaminación: {this.props.user.check}</h2>}
         
           {/* <p>Hola {this.props.user.username}</p>
         <h3>Foto: {this.props.user.pictureUrl}  </h3>
           <h3>Tu coche: {this.props.user.coche} </h3>
           <h3>Pegatina de contaminacion: {this.props.user.check} </h3>  */}
        </div>
      )

    
  }
}



