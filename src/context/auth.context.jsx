import {createContext,useState} from "react"
import books from "../Books";

const bool = false;
export const AuthContext = createContext(
    {
        auth:null,
        setAuth:()=>{}
})

export const AuthProvider =({children})=>{
    const [auth,setAuth] = useState(false);
    const value={auth,setAuth}
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}