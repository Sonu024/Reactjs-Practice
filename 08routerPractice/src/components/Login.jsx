import { useState } from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

export function Login(){
    const [user, setUser] = useState("")
const auth = useAuth()
const navigate = useNavigate()

const handleLogin = () =>
    {
        auth.login(user)
        navigate("/")

    }

    return(
        <>
        <label>
            username: <input type="text" onChange={(e) => setUser(e.target.value)} />
        </label>
        <button onClick={handleLogin}>Login</button>
        </>
    )
}