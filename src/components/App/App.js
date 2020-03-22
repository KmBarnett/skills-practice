import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Form from '../Form/Form.js'
import Card from '../Card/Card.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: []
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Idea Box</h1>
          <h1 className='rotate-center'>?</h1>
        </header>
        <main>
          <Form />
          <Card />
        </main>
      </div>
    )}
}

export default App;
