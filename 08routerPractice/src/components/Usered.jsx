import { useReducer } from "react";

const initialState = 1
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
            
        case "decrement":
            return state - 1;
           
        case "reset":
            return initialState;
           

        default:
            return state;
           
    }
}

export function Usered(){
    const [count, setcount] = useReducer(reducer , initialState)
    return(
        <>
        <div> count: {count}</div>
       <div>
        <button type="button" onClick={() => setcount("increment")}>Increment</button>
        <button type="button" onClick={() => setcount("decrement")}>Decrement</button>
        <button type="button" onClick={() => setcount("reset")}>Reset</button>
        </div>
       

        </>
    )
}