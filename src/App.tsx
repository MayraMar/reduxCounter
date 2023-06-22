import React from "react";

import "./App.css";
import Contador from "./features/counter/Contador";
import Tareas from "./features/todoList/Tareas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="contador">
          <p>Contador con Redux</p>
          <Contador />
        </div>
        <div className="tareas">
          <p>Listado de Tareas</p>
          <Tareas />
        </div>
      </header>
    </div>
  );
}

export default App;
