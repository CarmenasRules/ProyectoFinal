import classnames from 'classnames';
import snakeCase from 'lodash/snakeCase';
import React, { Component } from 'react';
import Switch from '../ToggleSwitch/ToggleSwitch';
import './Toggleinfo.css';

// List of activities that can trigger notifications
const pollutionnumber = 3;
const ACTIVITIES = [
  'News Feeds', 'Likes and Comments', 'Live Stream', 'Upcoming Events',
  'Friend Requests', 'Nearby Friends', 'Birthdays', 'Account Sign-In'
];

class Toggleinfo extends Component {

  // Initialize app state, all activities are enabled by default
  state = { enabled: false, only: ACTIVITIES.map(snakeCase) }

  toggleNotifications = ({ enabled }) => {
    const { only } = this.state;
    this.setState({ enabled, only: enabled ? only : ACTIVITIES.map(snakeCase) });
  }

  toggleActivityEnabled = activity => ({ enabled }) => {
    let { only } = this.state;

    if (enabled && !only.includes(activity)) {
      only.push(activity);
      return this.setState({ only });
    }

    if (!enabled && only.includes(activity)) {
      only = only.filter(item => item !== activity);
      return this.setState({ only });
    }
  }

  renderNotifiableActivities() {
    const { only } = this.state;

    return ACTIVITIES.map((activity, index) => {
      const key = snakeCase(activity);
      const enabled = only.includes(key);

      const activityClasses = classnames(
        'small mb-0 pl-3',
        enabled ? 'text-dark' : 'text-secondary'
      );

      return (
        <div key={index} className="col-5 d-flex mb-3">
          <Switch theme="graphite-small" className="d-flex" enabled={enabled} onStateChanged={ this.toggleActivityEnabled(key) } />
          <span className={activityClasses}>{ activity }</span>
        </div>
      );
    })
  }

  render() {
    const { enabled } = this.state;

    const headingClasses = classnames(
      'font-weight-light h2 mb-0 pl-4',
      enabled ? 'text-dark' : 'text-secondary'
    );
      const pepe = 200
    return (
      <div className="App position-absolute text-left d-flex justify-content-center align-items-start pt-5 h-100 w-100">
        <div className="d-flex flex-wrap mt-5" style={{width: 600}}>

          <div className="d-flex p-4 border rounded align-items-center w-100">
            <Switch theme="default" className="d-flex" enabled={enabled} onStateChanged={this.toggleNotifications} />
            <span className={headingClasses}>Notifications</span>
          </div>

          { enabled && (
              <div className="container-fluid px-0">
                 
                  <h3>No existen avisos o restricciones de tráfico para hoy </h3>
                  {/* </div>  */}
                  { pepe == 200  && <p>Hola</p>}
                      <h1>Escenario 1</h1>
                    <p>Se han superado durante un día los 180 microgramos/m3.</p>
                    <h3>Actuaciones: </h3>
                    <p>Reducción de la velocidad a <b>70km/h</b> en la <b>M-30</b> y <b>accesos</b>.</p> 


                      <h1>Escenario 2</h1>
                    <p>Se han superado durante dos días consecutivos los 180 microgramos/m3 o se han superado durante un dia los 200microgramos/m3.</p>
                    <h3>Actuaciones: </h3>
                    <p>Reducción de la velocidad a <b>70km/h</b> en la <b>M-30</b> y <b>accesos</b></p>
                    <p><b>Prohibido estacionar</b> en la <b>zona SER</b> salvo los vehículos con etiqueta CERO y ECO.</p>
                    <p><b>Prohibición de circular</b> a los vehículos <b>sin etiqueta ambiental</b> de la DGT, incluidas las <b>motocicletas</b>, en la <b>almendra central</b> y en la <b>M-30</b> de 6:30 a 22:00. </p> 


                       <h1>Escenario 3</h1>
                    <p>Se han superado durante tres días consecutivos los 180 microgramos/m3 o se han superado durante dos días los 200microgramos/m3.</p>
                    <h3>Actuaciones: </h3>
                    <p><b>Limitación</b> de velocidad a <b>70km/h</b></p>
                    <p><b>Prohibido estacionar</b> en la <b>zona SER</b> salvo los vehículos con etiqueta CERO y ECO.</p>
                    <p><b>Prohibición de circular</b> a los vehículos <b>sin etiqueta ambiental</b> de la DGT, incluidas las <b>motocicletas</b>, en <b>toda</b> la ciudad.</p>
                  {/* </div>   */}


                         <h1>Escenario 4</h1>
                    <p>Se han superado durante cuatro días consecutivos 200microgramos/m3.</p>
                    <h3>Actuaciones: </h3>
                    <p><b>Limitación</b> de velocidad a <b>70km/h</b></p>
                    <p><b>Prohibido estacionar</b> en la <b>zona SER</b> salvo los vehículos con etiqueta CERO y ECO.</p>
                    <p><b>Prohibición de circular</b> a los vehículos <b>sin etiqueta ambiental</b> de la DGT, incluidas las <b>motocicletas</b>, en <b>toda</b> la ciudad.</p>
                    <p><b>Prohibición</b> de circular en la <b>M30</b>  y su interior a <b>todos</b> los vehiculos con <b>etiqueta B</b>.</p>
                  {/* </div>    */}


                     <h1>Escenario 5</h1>
                    <p>Se han superado durante un día los 400microgramos/m3.</p>
                    <h3>Actuaciones: </h3>
                    <p><b>Limitación</b> de velocidad a <b>70km/h</b></p>
                    <p><b>Prohibido estacionar</b> en la <b>zona SER</b> salvo los vehículos con etiqueta CERO y ECO.</p>
                    <p><b>Prohibición de circular</b> a los vehículos <b>sin etiqueta ambiental</b> de la DGT, incluidas las <b>motocicletas</b>, en <b>toda</b> la ciudad.</p>
                    <p><b>Prohibición</b> de circular en la <b>M30</b>  y su interior a <b>todos</b> los vehiculos con <b>etiqueta B y C</b>.</p>
                  </div>    
                 ) }

        </div>
      </div>
    );
  }
}

export default Toggleinfo;
