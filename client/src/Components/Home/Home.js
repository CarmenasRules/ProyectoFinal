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
        <div class="backgroundimg">
        <div class="textbackground">
        <h1>Pierde el miedo a moverte por Madrid!</h1>
        <h2>Piensa como Carmena, sé como Carmena.</h2>
        </div>
        </div>
       <div className="infogeneral">
        <div style={{ margin: "1.5rem 0 0 1.5rem"}} >
        <img  src={logo} style={{width: "35rem" , height:"20rem"}} />
    </div>
    <div class="informationp">
        <h1 class="quienesomos">¿Quiénes somos?</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum at est eget porta. Pellentesque et leo vel odio lobortis malesuada vitae et lectus. Nunc risus mi, tristique vel tortor in, malesuada finibus dui. Etiam dictum neque id tortor euismod, et interdum augue vulputate. Nam bibendum gravida diam, ut malesuada odio. Integer a magna eget est condimentum elementum. Donec sed malesuada nunc. Vestibulum et augue lectus. Phasellus sollicitudin urna sit amet turpis iaculis tempus. Aliquam vel suscipit nisi. Quisque lacinia quis sapien eu euismod. Aenean vel ullamcorper ex. Maecenas et molestie dolor, vitae posuere augue.</p>
        <button class="buttonmasinfo">Más Información</button>
    </div>

    </div>
    <div class="servicios">
    <h1>Nuestros servicios</h1>
    </div>
    <div class="iconos">
    <img class="icono1"  src={iconoposicion} style={{width: "10rem" , height:"10rem"}} />
    <img class="icono2" src={iconoruta} style={{width: "10rem" , height:"10rem"}} />
    <img class="icono3"src={cochelogo} style={{width: "10rem" , height:"10rem"}} />
    <img class="icono4" src={iconocontaminacion} style={{width: "10rem" , height:"10rem"}} />
    </div>
    <div class="texto">
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


       




