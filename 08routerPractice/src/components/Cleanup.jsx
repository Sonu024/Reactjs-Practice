import { useState } from "react"
import { Hook } from "./Hook"

export function Cleanup(){
   const [display, setdisplay] = useState(true)

   return(
    <>
    <button onClick={() => setdisplay(!display)}>Toggle</button>
    {display && <Hook />}
    </>
   )
}