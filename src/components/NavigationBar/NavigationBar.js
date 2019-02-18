import React from 'react';
import './ToolBar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const NavigationBar = props => (
    <header className="toolbar">
      <nav className="toolbar__navigation">


                <div className="toolbar__toggle-button">
                  <DrawerToggleButton click = {props.drawerClickHandler} />
                </div>


        <div className="toolbar__logo"> <a href="/">THE LOGO</a> </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">

          <ul>
            <li>  <a href="/">Law      </a> </li>
            <li>  <a href="/">Test     </a> </li>
            <Link to="/Law">Netflix</Link>
          </ul>
          

        </div>
      </nav>
    </header>
  )
  
  export default NavigationBar;