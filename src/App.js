import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [selectedFood, setSelectedFood] = useState('')

  const foodList = [
    'Sushi',
    'Pizza',
    'Burger & Fries',
    'Wings',
    'Dumplings/Dim Sum',
    'Hot Pot',
    'Korean BBQ',
    'Vietnamese',
    'Poke',
    'Hawaiian',
    'Noods'
  ]

  useEffect(() => {
    console.log(foodList)
  }, []) 
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          What's to eat?
        </h1>
        <section className="spinner-section">
          <div>
            <ul className="circle">
              {foodList.map((foodGroup, index) => (<li 
                key={index}
                className="spinner-slice">
                <div 
                  className="text"
                  spellCheck="false">
                  <p>{foodGroup}</p>
                </div>
              </li>))}
            </ul>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
