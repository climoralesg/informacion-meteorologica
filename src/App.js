//import './App.css';
import './style/main.css'
import { useState } from 'react';
import Saludo from './components/saludo';
import SaludoComponente from './components/saludoComponente';
import SaludoState from './components/saludoState';
import City from './components/City';



function App() {

  let nombre ="Claudio"

  const [informacion, setInformacion] = useState('');

  const busquedaCiudad=(valorObjeto)=>{
    //debugger;
    console.log(valorObjeto.target.value);
    setInformacion(valorObjeto.target.value);
    console.log(""+ process.env.REACT_APP_API_KEY_OPENWEATHER);
  }


  return (
    <div className="App">
    {/*<SaludoState nombre="Juan Peras" contador={4}/>*/}

    {/*
    <select>
      <option value="coronel">Coronel</option>
      <option value="concepcion">Concepcion</option>
    </select>
    <br/>
    <input type="text" onChange={busquedaCiudad} placeholder="Ingrese un texto"/>
    <br/>

    <div>
      <span>
        Consulta por el Tiempo
      </span>  
      <br/>
      <span>
        {informacion}
      </span>  
    </div>
    */}
    <City lang="es" units="metric"/>
    </div>
  );
}

export default App;
