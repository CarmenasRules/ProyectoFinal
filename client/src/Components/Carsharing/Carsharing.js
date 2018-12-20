import React, { Component } from 'react';
import car2 from '../../img/car2go.png';
import emov from '../../img/emov.jpeg';
import zity from '../../img/zity.jpeg';
import wible from '../../img/wible.png'

import './Carsharing.css';


export default class Protocolo extends Component {
  render() {
    return (
      <div>

<div className="primero">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 className="titulo1"> Carsharing </h1>
        
        </div>
        <div className= "color1">
        <div className="info1">
        <h2>¿Qué es?</h2>
<p> El <b>carsharing</b> es un servicio de <b>coche compartido</b> en el que 
  el usuario alquila el vehículo por cortos periodos de tiempo 
  (en la mayoría de los casos minutos, aunque también pueden ser 
  horas o días completos). Los vehículos <b>no emiten contaminantes </b> 
  por tratarse de <b>coches eléctricos</b>.</p>
<br></br>
</div>
</div>

<div className= "color2">
<div className="info2">
<br></br>
<h2>¿Qué empresas hay en Madrid?</h2>
<p>Estas son las 4 empresas de carsharing que actualmente prestan servicio en Madrid</p>
<br></br>
</div>
</div>

<div className="color3">
<div className="info3">
  <img src={car2} height="300px" width="320px" /> <br></br> <br></br>
    <a href="https://www.car2go.com/ES/es/"> <h2>Car2Go</h2> </a>
</div>
</div>

<div className= "color2">
<div className="info2">
<img src={emov} height="300px" width="310px" /> <br></br> <br></br>
  <a href="https://www.emov.eco/"> <h2>Emov</h2> </a>
</div>
</div>


<div className="color5">
<div className="info5">
  <img src={wible} height="280px" width="450px" /> 
  <a href="http://www.wible.es/"> <h2>Wible</h2> </a>
</div>
</div>

<div className= "color4">
<div className="info4">
  <img src={zity} height="300px" width="340px" /> <br></br> <br></br>
  <a href="https://zitycar.es/">  <h2>Zity</h2> </a>
</div>
</div>

     
      </div>
    )
  }
}

