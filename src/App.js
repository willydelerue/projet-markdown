import React from 'react';
import './App.css';

function App() {

  const changeTextHandler = () => {
    console.log('changé ! ');
  };

  return (
    <div className="App">
      <div className='elements'>

        <div className='element'>
          <textarea 
          value="Mon texte par défaut"
          onChange={changeTextHandler}>
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
