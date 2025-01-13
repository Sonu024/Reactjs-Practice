import { useNavigate } from "react-router-dom"

export function Navigation() {
    const navi = useNavigate()
    return(
        <>
        <h1>Accepted</h1>
        <button onClick={() => navi("/")}>Go back</button>
        </>
    )

}