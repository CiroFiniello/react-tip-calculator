/* eslint-disable react/prop-types */
import { useState } from "react";

import "./App.css";

function App() {
  const [valore, setValore] = useState();
  const [percentuale1, setPercentuale1] = useState(0);
  const [percentuale2, setPercentuale2] = useState(0);
  const tip = valore * ((percentuale1 + percentuale2) / 2 / 100);

  return (
    <div>
      <Costo onSetValore={setValore} />
      <Servizio
        domanda="Quanto ti è piaciuto il servizio?"
        onSetPercentuale={setPercentuale1}
      />
      <Servizio
        domanda="Quanto è piaicuto al tuo amico il servizio?"
        onSetPercentuale={setPercentuale2}
      />
      <Risposta valore={valore} tip={tip} />
    </div>
  );
}
function Costo({ onSetValore }) {
  // const [costo, setCosto] = useState();

  return (
    <form className="costo">
      <h3>Quaal è il costo?</h3>
      <input
        type="text"
        name="costo"
        placeholder="..."
        onChange={(e) => onSetValore(Number(e.target.value))}
      />
    </form>
  );
}

function Servizio({ domanda, onSetPercentuale }) {
  return (
    <div className="costo">
      <h3>{domanda}</h3>
      <select
        defaultValue={0}
        onChange={(e) => onSetPercentuale(Number(e.target.value))}
      >
        <option value="0">Non soddisfatto(0%)</option>
        <option value="5">è okay(5%)</option>
        <option value="10">era buono(10%)</option>
        <option value="20">Amazing!(20%)</option>
      </select>
    </div>
  );
}

function Risposta({ valore, tip }) {
  if (!valore) return;
  return (
    <div>
      <h1>tu paghi {valore + tip}</h1>
      <h3>
        ( di cui il costo iniziale {valore} + {tip} di mancia )
      </h3>
    </div>
  );
}
export default App;
