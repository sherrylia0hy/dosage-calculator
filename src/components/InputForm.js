const InputForm = ({weight, setWeight}) => {
    return(
    <div className="my-4 items-center flex place-content-center gap-4">
        <input className="w-72 px-4 h-12 ring-1 ring-stone-800/10 rounded-lg text-slate-700 placeholder:text-slate-400"min="0" max="999" placeholder="weight kg" type="number" id="weight" /*value={weight}*/ onChange={(e)=>{
            setWeight(e.target.value)
            console.log(e.target.value, "kg")
        }}/>
        {/* If state weight is not declared in this component. The component cannot read and wet the weight at the same time */}
        {/* The limitation of the weight won't  */}
        <label htmlFor="weight">kg</label>
        
    </div>
    //add function to adjust kg and lb
    )
    
}

export default InputForm