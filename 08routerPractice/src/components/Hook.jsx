import { useState, useEffect } from "react"

export function Hook(){
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)

    const ChangeValueXY = (e) =>
    {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        window.addEventListener("mousemove", ChangeValueXY)
        console.log("mousemove");

        return() => {
            console.log("Eventlistener removed.");
            window.removeEventListener("mousemove", ChangeValueXY);
            
        }
        
    }, [])

    return(
        <>
          Hook X- {X}
          Hook Y- {Y}
        </>
    )
}