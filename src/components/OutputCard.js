import { useState } from "react"

const OutputCard = ({drug, weight}) => {
    const [dosage, setDosage] = useState(drug.dosage_floor)
    let amount = Math.round(weight*dosage/drug.density*100)/100
  return (
    <div className="w-full md:w-max card p-6 ring-1 ring-gray-300 rounded-lg">
        <h1 className="text-xl font-bold">{drug.name}</h1>
        <h1 className="text-2xl font-bold underline">{amount}ml</h1>
        <input className="w-auto px-4 h-10 my-3 ring-1 ring-stone-800/10 rounded-lg placeholder:text-slate-400"type="number" />
        <ul>
            <li>Dosage:{drug.dosage_floor}~{drug.dosage_ciel}</li>
            <li>Injection way:{drug.injection}</li>
            <li>Density: {drug.density}</li>
        </ul>
    </div>
  )
}

export default OutputCard