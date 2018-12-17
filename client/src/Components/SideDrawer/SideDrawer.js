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
      <ul>
      
        <li>
          <a href="/Protocolos">Info</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;