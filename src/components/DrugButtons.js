import DrugButton from "./DrugButton"

const DrugButtons = ({drugs}) => {
  //why do I need to add curly braket here
  return (
    <>
    {drugs.map((drug)=> (
      <DrugButton drug={drug}/>
    ))}
    </>
    
  )
}

export default DrugButtons