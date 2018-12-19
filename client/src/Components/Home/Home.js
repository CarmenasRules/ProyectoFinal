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
        <div className="backgroundimg">
        <div className="textbackground">
        <h1>Pierde el miedo a moverte por Madrid!</h1>
        <h2>Piensa como Carmena, sé como Carmena.</h2>
        </div>
        </div>
       <div className="infogeneral">
        <div style={{ margin: "1.5rem 0 0 2.5rem"}} >
        <img  className="fotitocoche" src={logo} style={{width: "37rem" , height:"20rem"}} />
    </div>
    <div className="informationp">
        <h1 className="quienesomos">¿Quiénes somos?</h1>
        <p>Somos un par de programadores que hemos desarrollado una app para poder viajar por Madrid sin miedo a la restricciones por la  contaminación. Esto lo logramos gracias a un registro en el que indicará su pegatina de contaminación y en base a esto podrá saber si entrar a la almendra central de Madrid o no dependiendo de el nivel de contaminación que también podrá revisar. </p>
        <button className="buttonmasinfo">Más Información</button>
    </div>

    </div>
    <div className="servicios">
    <h1>Nuestros servicios</h1>
    </div>
    <div className="iconos">
    <img className="icono1"  src={iconoposicion} style={{width: "10rem" , height:"10rem"}} />
    <img className="icono2" src={iconoruta} style={{width: "10rem" , height:"10rem"}} />
    <img className="icono3"src={cochelogo} style={{width: "10rem" , height:"10rem"}} />
    <img className="icono4" src={iconocontaminacion} style={{width: "10rem" , height:"10rem"}} />
    </div>
    <div className="texto"> 
    <div>
    <h1>Ubicaciones</h1>
    <p>Utilizamos las ubicaciones de Google Maps para ofrecerte una mejor experiencia.</p>
    </div>
    <div>
    <h1>Rutas</h1>
    <p>Rutas simples e intuitivas, para viajar teniendo en cuenta las prohibiciones por contaminación.</p>
    </div>
    <div>
    <h1>Elige tu medio de transporte</h1>
    <p>Puedes elegir entre ir en coche, a pie o en transporte público.</p>
    </div>
    <div>
    <h1>Contaminación</h1>
    <p>Ayuda a reducir la contaminación y ya de paso, ¡ahórrate una multa!.</p>
    </div>
    </div>
    </div>
    );
  }
}


       




