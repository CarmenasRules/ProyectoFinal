import React, { Component } from 'react';
import Madridcentral from '../../img/madrid-central-logo-1440_1440x655c.png';
import './MadridCentral.css';
import logo from "../../img/madrid-central-logo-1440_1440x655c.png";
import logo2 from "../../img/Madrid-Central.png";
import logo3 from "../../img/Plan-A.png";
import logo4 from "../../img/pegatinadgt.png";
import logo5 from "../../img/93ff93e185c24ff180fe4165502a3b16.png";
import logo6 from "../../img/coche-corriendo-carretera_25819-26.png";
import logo7 from "../../img/driving-downtown-vector-17019455 copia.jpg";


export default class MadridCentral extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div>
        <div className="primero1">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 class="titulo1"> Madrid Central </h1>
        {/* <img className="madridc" src={Madridcentral} style={{width: "40rem" , height:"20rem"}}></img> */}
        {/* <div className="colors1">
        </div> */}
        </div>
        <div className= "color1">
        <div className="logoblanco">
<img  src={logo} style={{width: "800px" , height:"300px"}} /> 
        <div className="info1">
       <h2>¿Qué es?</h2>
<p> Madrid Central es una zona de bajas
emisiones que comenzara a Tuncionar el
viernes 30 de noviembre de 2018. Esta
medida, la primera del Plan A de Calidad
del Aire y Cambio Climático, favorecerá al
peatón, la bicicleta y el transporte público,
que ganarán en protagonismo y espacio
también con la reforma de calles como
Gran Vía o Atocha. El distrito Centro se
convertirá en un pulmón para la ciudad en
pleno corazón de Madrid. </p>
</div>
</div>
</div>
<div className= "color2">
<div className="logo">
<img className="logodentro2" src={logo2} style={{width: "300px" , height:"300px"}} /> 
<div className="info2">
<h2>¿Cuál es el perímetro de Madrid
Central?</h2>
<p>Puedes comprobar el área en el
mapa de la app
El área agrupará las cuatro APR actuales
(Letras, Cortes, Embajadores y Opera) y
añadirá otras zonas del centro. No habrá
calles de libre circulación y el perímetro
lo determinan las rondas y los bulevares:<br></br>
las calles Alberto Aguilera, Glorieta de
Bilbao, Plaza de Alonso Martínez, Plaza
de Colón, Paseo de Recoletos, Paseo del
Prado, Ronda de Atocha, Ronda de Toledo,
Ronda de Segovia, Calle Bailén, Plaza de
España y Calle Princesa.</p>
</div>
</div>
</div>
<div className="color3">
<div className="logoblanco">
<img className="logodentro3" src={logo5} style={{width: "600px" , height:"350px"}} /> 
<div className="info3">
<h2>¿Podré circular por Madrid Central?</h2>
<p>Como norma general, en Madrid Central
solo podrán circular vehículos con
distintivo ambiental CERO y ECO
Los que tengan etiquetas B o C solo
podrán entrar para aparcar en un
garaje privado, reserva o aparcamiento
de uso público
Si no tienes distintivo ambiental, no
podrás acceder a Madrid Central.</p>
</div>
</div>
</div>
<div className= "color4">
<div className="logo2">
<img  className="logodentro4" src={logo3} style={{width: "300px" , height:"250px"}} /> 
<div className="info4">
<h2>¿Y SI VIVO dentro de la zona de
Madrid Central?</h2>
<p>Los vehículos de personas empadronadas
podrán acceder y circular libremente por
Madrid Central, que podrán estacionar
en su barrio como hasta ahora, pero
a partir de 2025 necesitarán tener un
distintivo ambiental.</p>
</div>
</div>
</div>
<div className="color5">
<div className="logoblanco">
<img className="logodentro5" src={logo7} style={{width: "600px" , height:"350px"}} /> 
<div className="info5">
<h2>¿Y si soy propietarios de una
vivienda en Madrid Central y no estoy
empadronado?</h2>
<p>Se les aplica la regla general. Solo podrán
acceder con etiquetas ECO o CERO o con
B o C si van a garajes o aparcamientos
públicos. Si el vehículo es un ciclomotor,
motocicleta o de tres ruedas cuya etique-
ta sea B o C, podrán acceder y estacionar
desde las 7:00 a las 22:00 horas.
Los titulares de plazas de garaje y plazas
PAR situadas en Madrid Central podrárn
acceder a sus plazas con cualquier
vehículo hasta 2020 cuando no se
les permitirá el acceso sin distintivo
ambiental.</p>
</div>
</div>
</div>
<div className= "color6">
<div className="logo2">
<img  src={logo4} style={{width: "300px" , height:"200px"}} /> 
<div className="info6">
<h2> ¿Podré entrar con un vehículo
sin etiqueta?</h2>
<p>Podrán acceder, si tienen etiqueta
ambiental, los taxis, y los vehículos de
arrendamiento con conductor con servicio
previamente contratado en la zona, los
que presten servicios a la zona, y las
motocicletas y los ciclomotores. También
podrán circular los vehículos que accedan
a aparcamientos de rotación situados
dentro del área siempre que dispongan de
distintivo medioambiental de la DGT.</p>
</div>
</div>
</div>
<div className= "color7">
<div className="logoblanco">
<img src={logo6} style={{width: "600px" , height:"350px"}} /> 
<div className="info7">
<h2>¿Puede venir a verme un familiar
con su coche?</h2>
<p>Los residentes empadronados podrán
solicitar hasta 20 invitaciones al mes para
otros vehículos, que podrán estacionar
en la zona SER durante dos horas como
máximo, o en un aparcamiento sin tiempo
límite. Los vehículos de invitados que
no dispongan de etiqueta ambiental
no podrán acceder a Madrid Central a
partir de 2020.
Los vehículos con tarjeta PMR podrán
acceder con cualquier vehículo, indepen-
dientemente de su etiqueta ambiental
A partir de 2025 solo se permitirá el
acceso de vehículo sin etiqueta cuando
sean adaptados.</p>
</div>
</div>
</div>

      </div>
    )
  }
}
