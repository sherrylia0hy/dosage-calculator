import { useState } from "react"

const DrugButton = ({drug}) => {
    const [select, setSelect] = useState(false)
    const toggle=(drugName)=>{
        setSelect(!select)
    }
  return (
    <button className={select ? "select btn":"btn"} onClick={()=>toggle(drug)}>{drug.name}</button>
  )
}

export default DrugButton