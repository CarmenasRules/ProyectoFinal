import React from 'react';
import logo from '../../img/imagenmenu.jpg';
import './SideDrawer.css';



const sideDrawer = props => {
   let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
   }



   return (
     
    <nav className={drawerClasses}>
      <img src={logo} style={{width: "25rem" , height:"10rem"}} />
      <ul className="ul">
        <li>
          <a href="/MapPage">Mapa</a>
        </li>
        <li>
         <a href="/Protocolo">Protocolos</a>
        </li>
        <li>
        <a href="/MadridCentral">Madrid Central</a>
        </li>
        <li>
        <a href="/Carsharing">Carsharing</a>    
        </li>
        <li>
        <a href="/ProtocoloNavidad">Protocolos Navidad</a>
        </li>
        <li>
          <a href="/Perfil">Perfil</a>
        </li>
        <li>
        <a href="/login">Login</a>       
        </li>
        <li>
        <a href="/signup">Sign up</a>
        </li>
        {/* <li>
          
        <button onClick={this.logout}>Logout</button>
        </li> */}

        <li>
        </li><li>
        </li><li>
        </li><li>
        </li><li>
        </li><li>
        </li><li>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;