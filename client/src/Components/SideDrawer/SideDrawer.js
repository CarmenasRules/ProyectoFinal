import React from 'react';
import logo from '../../img/fotomenu.jpg';
import './SideDrawer.css';

const sideDrawer = props => {
   let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
   }
   return (
    <nav className={drawerClasses}>
      <img src={logo} style={{width: "25rem" , height:"10rem"}} />
      <ul class="ul">
        <li>
          <a href="/Protocolos">Protocolos</a>
        </li>
        <li>
          <a href="/login">Login / Logout</a>
        </li>
        <li>
          <a href="/">Perfil</a>
        </li>
        <li>
          <a href="/">Mapa</a>
        </li>
        <li>
          <a href="/">Madrid Central</a>
        </li>
        <li>
        </li>
        <li>
        </li>
        <li>
        </li>
        <li>
        </li>
        <li>
        </li>
        <li>
        </li>
   
      </ul>
    </nav>
  );
};

export default sideDrawer;