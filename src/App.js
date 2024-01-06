import React, { useState } from "react";
import "./index.css";

function App() {
  const [caloriasAdicionadas, setCaloriasAdicionadas] = useState([]);
  const [totalCalorias, setTotalCalorias] = useState(0);
  const [caloriasConsumidas, setCaloriasConsumidas] = useState(0);

  const adicionarCalorias = () => {
    if (caloriasConsumidas > 0) {
      setCaloriasAdicionadas([...caloriasAdicionadas, caloriasConsumidas]);
      setTotalCalorias(totalCalorias + caloriasConsumidas);
      setCaloriasConsumidas(0);
    }
  };

  return (
    <div className="container">
      <h1>Contador de Calorias</h1>
      <p>Calorias que serão adicionadas: {caloriasConsumidas}</p>
      <label>
        Insira as calorias consumidas:
        <input
          type="number"
          value={caloriasConsumidas}
          onChange={(e) => setCaloriasConsumidas(parseInt(e.target.value, 10))}
        />
      </label>
      <button onClick={adicionarCalorias}>Adicionar Calorias</button>
      <p className="total">Total de calorias consumidas: {totalCalorias}</p>

      <hr></hr>

      <div>
        <h2>Calorias Adicionadas:</h2>
        <ul>
          {caloriasAdicionadas.map((caloria, index) => (
            <li key={index}>{caloria} Calorias</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
