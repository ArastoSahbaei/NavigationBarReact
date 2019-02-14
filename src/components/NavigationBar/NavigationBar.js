import React from 'react';
import './ToolBar.css';

const NavigationBar = props => (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div />
        <div className="toolbar__logo">
          <a href="/">THE LOGO</a>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Users</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
  
  export default NavigationBar;