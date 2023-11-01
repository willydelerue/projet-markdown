import React, { useState } from 'react';
import './App.css';

function App() {

  // State
  const[texte, setTexte] = useState('Ma zone texte par défaut');

  //Fonctions
  const changeTextHandler = (event) => {
    setTexte(event.target.value)
  };

  return (
    <div className="App">
      <div className='elements'>

        <div className='element'>
          <textarea 
          value= {texte}
          onChange={(e) => changeTextHandler(e)}>
          </textarea>
        </div>

        <div className='element'>
          <code>Test</code>
        </div>

      </div>
    </div>
  );
}

export default App;
