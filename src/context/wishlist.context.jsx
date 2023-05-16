import React, { createContext, useContext,useState } from "react"

export const WishlistContext= createContext({
    wishClicked:null,
    setWish:()=>{}
})

export const WishlistProvider = ({children})=>{
    const [wishClicked,setWish] = useState(false);
    const value={wishClicked,setWish}
    return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}