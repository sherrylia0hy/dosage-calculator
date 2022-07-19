import './App.css';
import { useState } from "react"
import DrugButtons from './components/DrugButtons';
import InputForm from './components/InputForm';
import OutputCard from './components/OutputCards';
import OutputCards from './components/OutputCards';

function App() {
  const [drugs, setDrugs] = useState([
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
      id:1,
      select:false
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
      id:2,
      select:false
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
      id:3,
      select:false
    }
  ])
  const [weight, setWeight] = useState([])

  const toggleSelect=(id)=>{
    setDrugs(drugs.map((drug)=>drug.id === id ? {...drug, select: !drug.select}:drug))
   
}
//TODO: Add toggle option for kg and lb
  return (
    <div className="container">
      <InputForm weight={weight} setWeight={setWeight}/>
      <DrugButtons drugs={drugs} toggleSelect={toggleSelect}/>
      <OutputCards drugs={drugs} weight={weight}/>
    </div>
  );
}

export default App;
