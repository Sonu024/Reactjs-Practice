import { useState, createContext, useContext } from "react";

const AuthContext = createContext(null)
export function AuthProvider({children}){
    const [user, setUser] = useState("")

    const login = (user) => {
        setUser(user);
    }

    const logout = () => {
        setUser();
    }

    return (
    <AuthContext.Provider value={{user, login, logout}}>
        {children}
    </AuthContext.Provider>)

}

export function useAuth(){
    return useContext(AuthContext)
}