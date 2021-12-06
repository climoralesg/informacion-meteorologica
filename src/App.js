import './App.css';
import { useState } from 'react';

import Saludo from './components/saludo';
import SaludoComponente from './components/saludoComponente';
import SaludoState from './components/saludoState';

function App() {

  let nombre ="Claudio"

  const [informacion, setInformacion] = useState('');

  const busquedaCiudad=(valorObjeto)=>{
    debugger;
    console.log(valorObjeto.target.value);
    setInformacion(valorObjeto.target.value);
  }


  return (
    <div className="App">
    {/*<SaludoState nombre="Juan Peras" contador={4}/>*/}

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

    </div>
  );
}

export default App;
