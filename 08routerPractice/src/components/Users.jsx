import { useSearchParams } from "react-router-dom"

export function Users(){
const [searchParams, setSearchParams] = useSearchParams()
const showActiveUsers = searchParams.get("filter") === 'Active' 
    return(
        <>
         <h1>Buttons</h1>
         <div >
            <button className="p-4" onClick={() => setSearchParams({filter: 'Active'})}>Active now</button>
            <button onClick={() => setSearchParams({})}>Reset</button>
            {showActiveUsers ? <h2>These are active users.</h2> : <h2>These are inactive users.</h2>}
         </div>
        </>
       
    )
}