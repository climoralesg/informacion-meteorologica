//import './App.css';
import './style/main.css'
import { useState } from 'react';
import City from './components/City';



function App() {
  return (
    <div className="App">
    <City lang="es" units="metric"/>
    </div>
  );
}

export default App;
