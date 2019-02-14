import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />   
        <main style={{marginTop: '64px'}}> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, esse?</p>
        </main>
      </div>
    );
  }
}

export default App;
