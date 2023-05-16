import {createContext,useContext,useState} from "react";
import books from "../Books";
export const BookContext = createContext({
    curBooks:null,
    setCurBooks:()=>{
    }
})

export const BookProvider=({children})=>{
    const [curBooks,setCurBooks]= useState(books);
    const value = {curBooks,setCurBooks};
return <BookContext.Provider value={value}>{children} </BookContext.Provider>
}

