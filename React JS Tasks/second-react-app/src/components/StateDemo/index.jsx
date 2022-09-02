import React, {useState} from "react";
import "./index.css"
const StatesDemo=()=>{
    const[name, setName] =useState("kiran");
    const[counter, setCounter] = useState(0)
    function handleClick(){
        if (name === "kiran"){
            setName("Dipak")
        }else{
            setName("kiran")
        }
    }
    return(
        <div class="container">
            <h1>React States Demo</h1>
            <h2>The Name IS : {name}</h2>
            <h2>Counter : {counter}</h2>
            <button class="button" onClick= {handleClick}>Change Name</button>
            <button class="button" onClick= {()=>setCounter(counter + 1)}>Increase +</button>
            <button class="button" onClick= {()=>setCounter(counter - 1)}>Decrease -</button>
        </div>
    )
}
export default StatesDemo;