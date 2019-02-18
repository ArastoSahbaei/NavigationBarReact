import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import BackDrop from './components/BackDrop/BackDrop'
import Home from './components/Home/Home'
import Law from './components/Law/Law'

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

<BrowserRouter>
        <div className="App">
            <NavigationBar />
                <Route exact path = '/'     component={Home} />
                <Route       path = '/law'  component={Law}  />
        </div>
      </BrowserRouter>


        <NavigationBar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <main style={{marginTop: '64px'}}> 
        <Home />
        </main>
      </div>
    )
  }
}

export default App;
