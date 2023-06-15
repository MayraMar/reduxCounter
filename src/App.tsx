import React from 'react';

import './App.css';
import Contador from './components/Contador';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Contador con Redux</p>
       <Contador/>
      </header>
    </div>
  );
}

export default App;
