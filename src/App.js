import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import GenerateurCitation from './components/GenerateurCitation'
import Weather from './components/Weather'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GenerateurCitation />
        <Weather />
        <Footer />
      </div>
    );
  }
}

export default App;
