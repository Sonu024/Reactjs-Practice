//useMemo----------------------------
import React, {useMemo, useState} from "react";

export function Counter(){
    const [counterOne, setcounterOne] = useState(1)
    const [counterTwo, setcounterTwo] = useState(1)

    const IncrementOne = () => {
        setcounterOne(counterOne + 1)
    }
    const isEven = useMemo (() => {
        let i=0
        while (i<200000000) {
            i++
        }
        return counterOne % 2 ===0
    }, [counterOne])

    const IncrementTwo = () => {
        setcounterTwo(counterTwo + 1)
    }

    return(
        <>
        <div>
            <button onClick={IncrementOne}>CountOne-{counterOne}</button>
            <span>{isEven ? 'Even': 'Odd'}</span>
        </div>
       <div><button onClick={IncrementTwo}>CountTwo-{counterTwo}</button></div>
      
        </>
    )
}