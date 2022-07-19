import OutputCard from "./OutputCard"

const OutputCards = ({drugs, weight}) => {
  return (
    <div className="w-11/12 flex-wrap card-holder m-6 gap-4 flex place-content-center">
      {/* <h1>{drugs}</h1> */}

      {drugs.map((drug)=>drug.select ===true?<OutputCard key={drug.id} drug={drug} weight={weight}/>: "")}
      {/* I think there are problems here, is there anyway to make this better? */}
    </div>
  )
}

export default OutputCards