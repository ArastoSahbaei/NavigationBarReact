import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop'
import sideDrawer from './components/SideDrawer/SideDrawer';

class App extends Component {

  state = {
    sideDrawerOpen: false
  };

drawerToggleClickHandler = () => {
       this.setState((prevState) => {
         return {sideDrawerOpen: !prevState.sideDrawerOpen}
       })
}

backDropClickHandler = () => {
       this.setState({sideDrawerOpen: false})
}


  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop   = <BackDrop click={this.backDropClickHandler}  />
    }

    return (
      <div style={{height: '100%'}}>
        <NavigationBar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <main style={{marginTop: '64px'}}> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, esse?</p>
        </main>
      </div>
    )
  }
}

export default App;
