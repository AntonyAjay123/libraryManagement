import {createContext,useState} from "react"

export const UserContext = createContext(
    {
        curUser:null,
        setUser:()=>{}
})

export const UserProvider = ({children})=>{
    const [curUser,setUser] = useState({
        name:"",
        role:"",
        email:"",
        password:""
    })
    const value={curUser,setUser};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}