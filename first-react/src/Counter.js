import React, {useState} from "react"

export function Counter() {

const [counter, setCounter] = useState(0);

    return ( 
        <div>
            <p>Hai cliccato {counter}</p>
            <button onClick={ ()=> setCounter(counter + 1)}>Increment</button>
            <div>{counter}</div>
        </div>
    )
}