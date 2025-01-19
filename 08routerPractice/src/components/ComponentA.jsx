import { useContext } from "react";
import {UserContext, GetContext} from '../App'
 export function ComponentA(){
   const user =  useContext(UserContext)
    const title = useContext(GetContext)

    return(
        <>
        {user} - {title}
        </>
    )
 }