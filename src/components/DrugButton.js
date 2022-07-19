import { useState } from "react"

const DrugButton = ({drug, toggleSelect, select}) => {
 
  return (
    <button className={"text-gray-300 px-4 py-1 rounded-full ring-1 ring-gray-300 hover:bg-sky-300 hover:text-gray-700 hover:ring-gray-700 " + (select ? "bg-sky-600 text-gray-300 ring-gray-700":"bg-transparent")} onClick={()=>toggleSelect(drug.id)}>{drug.name}</button>
  )
}

export default DrugButton