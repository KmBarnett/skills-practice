import React, { useState } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Form from '../Form/Form.js'
import Card from '../Card/Card.js'
import Ideas from '../Ideas/Ideas.js'


const App = () => {
  const [ideas, changeIdeas] = useState([])

  const addIdea = idea => {
    changeIdeas([...ideas, idea])
  }

  const removeIdea = id => {
    changeIdeas(ideas.filter(idea => idea.id !== id))
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Idea Box</h1>
          <h1 className='rotate-center'>?</h1>
        </header>
        <main>
          <Form addIdea={addIdea} />
          <Ideas ideas={ideas} removeIdea={removeIdea} />
        </main>
      </div>)
}

export default App;
