import './App.css';
import { useState } from "react"
import DrugButtons from './components/DrugButtons';
import InputForm from './components/InputForm';
import OutputCard from './components/OutputCard';

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
      weight: "all",
      id:1
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
      weight: "lower 20",
      id:2
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
      weight: "over 20",
      id:3
    }
  ])
  const [weight, setWeight] = useState([])

  return (
    <div className="container">
      <InputForm weight={weight} setWeight={setWeight}/>
      <DrugButtons drugs={drugs}/>
      <OutputCard />
    </div>
  );
}

export default App;
