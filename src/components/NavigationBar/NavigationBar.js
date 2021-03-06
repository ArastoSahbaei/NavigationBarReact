import React from 'react';
import './ToolBar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import {NavLink} from 'react-router-dom';



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
            <li><NavLink to="/">     Home   </NavLink></li>
            <li><NavLink to="/law">  Law    </NavLink></li>
          </ul>
          

        </div>
      </nav>
    </header>
  )
  
  export default NavigationBar;