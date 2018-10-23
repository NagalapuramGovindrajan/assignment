import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';



import logo from './logo.svg';
import './App.css';
import StartPage from './components/startPage';

class App extends Component {

  render() {
    return (
      
      <div className="App">
        <div className="main-app">
          {
              <Switch>
                  <Route exact path = "/" component = { StartPage }/>                  
              </Switch>
          }

          </div>
          <div className="preloader"></div>
      </div>
  
    );
  }
}

export default App;
