import './App.css';
import { useState } from "react"

function App() {
  const [drugs, setdrugs] = useState([
    {
      name: "Midazolam",
      injection: [
        "IM",
        "IV"
      ],
      dosage_floor: 0.1,
      dosage_ciel: 0.2,
      prefer_dosage: 0.1,
      density: 0.04,
      species: [
        "dog",
        "cat"
      ],
      weight: "all"
    },
    {
      name: "Acepromazine",
      injection: [
        "IM"
      ],
      dosage_floor: 0.04,
      dosage_ciel: 0.06,
      prefer_dosage: 0.04,
      density: 0.04,
      species: [
        "dog"
      ],
      weight: "lower 20"
    },
    {
      name: "Dexmedetomidine",
      injection: [
        "IM"
      ],
      dosage_floor: 0.004,
      dosage_ciel: 0.006,
      prefer_dosage: 0.004,
      density: 0.04,
      species: [
        "cat"
      ],
      weight: "over 20"
    }
  ])

  return (

  );
}

export default App;
