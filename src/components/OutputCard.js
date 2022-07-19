import { useState } from "react"

const OutputCard = ({drug, weight}) => {
    const [dosage, setDosage] = useState(drug.dosage_floor)
    let amount = weight*dosage/drug.density
  return (
    <div>
        <h1>{drug.name}</h1>
        <h1>{amount}ml</h1>
        <input type="number" />
        <ul>
            <li>Dosage:{drug.dosage_floor}~{drug.dosage_ciel}</li>
            <li>Injection way:{drug.injection}</li>
            <li>Density: {drug.density}</li>
        </ul>
    </div>
  )
}

export default OutputCard