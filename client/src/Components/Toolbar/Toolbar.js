import React from 'react';
import logo from '../../img/carmenasrules.png';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
    <div className="toolbar__toggle-button">
             <DrawerToggleButton click={props.drawerClickHandler} /> 
        </div>
        <div className="toolbar__logo"><img  href="/" src={logo} height="50px" width="50px" /></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><a href="/Protocolo">Más Info</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;