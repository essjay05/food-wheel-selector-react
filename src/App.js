import React from 'react';
import './App.css';
import FoodWheel from './components/FoodWheel/FoodWheel';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
          What should we eat?
        </h1>
        <p className="App-description">JK's Food Decision Wheel: spin to decide</p>
      </header>
      <div className="App-body">
        <FoodWheel />
      </div>
    </div>
  );
}

export default App;
