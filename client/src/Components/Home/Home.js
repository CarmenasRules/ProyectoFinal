import React, { Component } from 'react';
import './Home.css'
import logo from '../../img/electricar2.jpg'; 
import iconoposicion from '../../img/positionicon.png'; 
import iconoruta from '../../img/route2icon.png'; 
import iconocontaminacion from '../../img/pollutionicon.png'; 
import cochelogo from '../../img/caricon.png'
export default class Home extends Component {
    render() {
        return (
            <div>
        <div className="backgroundimg2">
        <div className="textbackground">
        </div>
        </div>
       <div className="infogeneral">
        <div style={{ margin: "1.5rem 0 0 2.5rem"}} >
        <img  className="fotitocoche" src={logo} style={{width: "32rem" , height:"16rem"}} />
    </div>
    <div className="informationp">
        <h1 className="quienesomos">Conoce cuáles son las normas para moverse por Madrid cuando está activado el protocolo anticontaminación,</h1>
        <h1>por dónde circular y aparcar en la ciudad</h1>
        
       
    </div>

    </div>
    <div className="servicios">
    <h1>NUESTROS SERVICIOS</h1>
    </div>
    <div className="iconos">
    <img className="icono1"  src={iconoposicion} style={{width: "10rem" , height:"10rem"}} />
    <img className="icono2" src={iconoruta} style={{width: "10rem" , height:"10rem"}} />
    <img className="icono3"src={cochelogo} style={{width: "10rem" , height:"10rem"}} />
    <img className="icono4" src={iconocontaminacion} style={{width: "10rem" , height:"10rem"}} />
    </div>
    <div className="texto"> 
    <div>
    <h2>Ubicaciones</h2>
    <p>Utilizamos las ubicaciones de Google Maps para ofrecerte una mejor experiencia.</p>
    </div>
    <div>
    <h2>Rutas</h2>
    <p>Planifica tu ruta de manera simple e intuitiva, para viajar teniendo en cuenta las prohibiciones por alta contaminación.</p>
    </div>
    <div>
    <h2>Parkings</h2>
    <p>Elige de antemano en qué parking puedes dejar el coche antes de emprender tu viaje al centro de la ciudad.</p>
    </div>
    <div>
    <h2>Contaminación</h2>
    <p>Te ayudamos a que planifiques tu viaje para contribuir entre todos a reducir la contaminación.</p>
    </div>
    </div>
    </div>
    );
  }
}


       




