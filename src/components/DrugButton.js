import { useState } from "react"

const DrugButton = ({drug, toggleSelect, select}) => {
 
  return (
    <button className={"text-slate-700 p-4 rounded-full hover:bg-sky-300 " + (select ? "bg-sky-300":"bg-sky-600")} onClick={()=>toggleSelect(drug.id)}>{drug.name}</button>
  )
}

export default DrugButton