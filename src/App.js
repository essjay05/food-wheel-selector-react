import React, { useState } from 'react';
import './App.css';
import FoodForm from './components/foodForm/FoodForm';
import Spinner from './components/spinner/Spinner';

function App() {

  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          What's to eat?
        </h1>
      </header>
      <Spinner />
      <FoodForm />
    </div>
  );
}

export default App;
