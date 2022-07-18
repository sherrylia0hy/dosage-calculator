import DrugButton from "./DrugButton"

const DrugButtons = ({drugs}) => {
  //why do I need to add curly braket here
  return (
    <>
    {drugs.map((drug)=> (
      <DrugButton key={drug.id} drug={drug}/>
      //Warning: Each child in a list should have a unique "key" prop.
        // key must assigned to the elements we are returning to the map() iterator.
        //https://www.geeksforgeeks.org/reactjs-keys/
    ))}
    </>
    
  )
}

export default DrugButtons