//FunctionBase Approach
import React, {useState} from "react"

function CounterFunction(){
    //there is no render function, only return
    //here we use react hooks to define state, because there is no constructor here 
    //no need to bind

    //create a variable using let or var //default value is zero
    let [number, setNumber] = useState(0)//statevalue and function name to update state 

    function increment(){
        setNumber(++number)
    }

    return(
        <div>
            <h1>Counter = {number}</h1>
            <button onClick={e => increment()}>Increment</button>
        </div>
    )
}

export default CounterFunction;