import React, { Component } from 'react';
 import './Protocolo.css';


export default class Protocolo extends Component {
  render() {
    return (
      <div>
         <div className="primero2">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 class="tituloprotocolo"> Protocolos </h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
        <h1 className="avisoscontaminacion">AVISOS DE CONTAMINACIÓN</h1>
        <div className="preaviso">
        <br></br><br></br><br></br><br></br>
        <h2>PREAVISO</h2>
        <p>
          Cuando en dos estaciones cualesquiera de una misma zona se superan los 180 microgramos/m3 durante dos horas consecutivas.
        </p>

        <p>
          Cuando en tres estaciones cualesquiera se superan los 180 microgramos/m3 durante tres horas consecutivas.
          </p> <br></br><br></br><br></br><br></br>
        <div className="aviso">
        <br></br><br></br><br></br><br></br>
          <h2>AVISO</h2>
          <p>Cuando en dos estaciones cualesquiera de una misma zona se superan los 200 microgramos/m3 durante dos horas consecutivas</p>
          <p>Cuando en tres estaciones cualesquiera se superan los 200 microgramos/m3 durante tres horas consecutivas</p>
           <br></br><br></br><br></br><br></br>
<div className="alerta">
            <br></br><br></br><br></br><br></br>
          <h2>ALERTA</h2>
          <p>CUando en tres estaciones cualesquiera de una misma zona (o dos si se trata de la zona 4)se superan los 400 microgramos/m3 durante tres horas consecutivas</p>
          <br></br><br></br><br></br><br></br>
</div>
          </div>
        </div>
<div className="Escenarios">
          <h1> ESCENARIOS DE CONTAMINACIÓN</h1>
          <div className="Escenario1"> 
          <br></br><br></br><br></br><br></br>
          <h2>ESCENARIO 1</h2>
          <p>Se activa con 1 día con superación del nivel de preaviso</p>
           <br></br><br></br><br></br><br></br>
           <div className="actuacion1"> 
           <br></br><br></br><br></br><br></br>
          <h3>ACTUACIONES</h3>
          <p>Reducción de la velocidad a 70km/h en la  M-30 y accesos</p>
          <div className="Escenario2"> 
          <br></br><br></br><br></br><br></br>
          <h2>ESCENARIO 2</h2>
          <p>Se activa con 2 días consecutivos con superación del nivel de preaviso o un día con superación del nivel de aviso</p>
          <br></br><br></br><br></br><br></br>
          <div className="actuacion2"> 
          <br></br><br></br><br></br><br></br>
          <h3>ACTUACIONES</h3>
          <p>Limitación de la velocidad a 70km/h en la  M-30 y accesos</p>
          <p> Prohibido estacionar en zona SER salvo vehículos con etiqueta CERO o ECO. </p>
          <p>Prohibición de la circulación a los
vehículos sin etiqueta ambiental de la DGT, incluidas las motocicletas, en la almendra central y en la M-30 DE 6:30 a 22:00</p>
          <div className="Escenario3">
          <br></br><br></br><br></br><br></br> 
          <h2>ESCENARIO 3</h2>
          <p>Se activa con 3 días consecutivos con superación del nivel de preaviso o dos días con superación del nivel de aviso</p>
          <br></br><br></br><br></br><br></br>
          <div className="actuacion3"> 
          <br></br><br></br><br></br><br></br>
          <h3>ACTUACIONES</h3>
          <p>Limitación de la velocidad a 70km/h en la  M-30 y accesos</p>
          <p> Prohibido estacionar en zona SER salvo vehículos con etiqueta CERO o ECO. </p>
          <p>Prohibición de la circulación a los
vehículos sin etiqueta ambiental de la DGT, incluidas las motocicletas, en toda la ciudad.</p>
          <div className="Escenario4"> 
          <br></br><br></br><br></br><br></br>
          <h2>ESCENARIO 4</h2>
          <p>Se activa con 4 días consecutivos de nivel de aviso</p>
          <br></br><br></br><br></br><br></br>
          <div className="actuacion4">
          <br></br><br></br><br></br><br></br> 
          <h3>ACTUACIONES</h3>
          <p>Limitación de la velocidad a 70km/h en la  M-30 y accesos</p>
          <p> Prohibido estacionar en zona SER salvo vehículos con etiqueta CERO o ECO. </p>
          <p>Prohibición de la circulación a los
vehículos sin etiqueta ambiental de la DGT, incluidas las motocicletas, en toda la ciudad.</p>
          <p>Prohibición de circular en la M-30 y su interior a todos los vehículos con etiqueta B</p>
          <br></br><br></br><br></br><br></br>
          <div className="Escenario5"> 
          <br></br><br></br><br></br><br></br>
          <h2>ESCENARIO 5</h2>
          <p>Se activa con 1 día en el nivel de alerta</p>
          <br></br><br></br><br></br><br></br>
          <div className="actuacion5"> 
          <br></br><br></br><br></br><br></br>
          <h3>ACTUACIONES</h3>
          <p>Limitación de la velocidad a 70km/h en la  M-30 y accesos</p>
          <p> Prohibido estacionar en zona SER salvo vehículos con etiqueta CERO o ECO. </p>
          <p>Prohibición de la circulación a los
vehículos sin etiqueta ambiental de la DGT, incluidas las motocicletas, en toda la ciudad.</p>
          <p>Prohibición de circular en la M-30 y su interior a todos los vehículos con etiqueta B y C</p>
          <br></br><br></br><br></br><br></br>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>   
      </div>
    )
  }
}
