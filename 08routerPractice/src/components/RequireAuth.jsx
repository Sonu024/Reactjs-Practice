import { useAuth } from "./Auth";
import { Navigate } from "react-router-dom";

export function RequireAuth({children}){
    const auth = useAuth();
    if(!auth.user){
        return <Navigate to='/login' />
    }
    return children
}