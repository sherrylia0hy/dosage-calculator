import { useState } from "react"

const DrugButton = ({drug, toggleSelect, select}) => {
 
  return (
    <button className={select ? "select btn":"btn"} onClick={()=>toggleSelect(drug.id)}>{drug.name}</button>
  )
}

export default DrugButton