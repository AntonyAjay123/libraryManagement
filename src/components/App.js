
import books from "../Books";
import { useState,useEffect } from "react";
import Directory from "./directory/directory.component";
import { Route, Routes } from "react-router-dom";
import Header from "./routes/header/Header";
import Home from "./routes/home/Home";
import SignIn from "./routes/signin/signin.component";

function sigin(){
  return <h1>This is the sigin page</h1>
}

export default function App() {
  const [search,setSearch] = useState("");
  const [typed,setTyped]= useState(false);
  const [availableBooks,setBooks] = useState(books);
  const [filteredBooks,setFilteredBooks] = useState(availableBooks);
useEffect(()=>{
  const newFilter = availableBooks.filter((book)=>book.title.toLowerCase().includes(search))
  setFilteredBooks(newFilter)
},[availableBooks,search])
  function getSearch(event){
    console.log("here")
    const value=event.target.value;
    setSearch(value.toLowerCase());
  }
  return <Routes>
  <Route path="/" element={<Header/>}>
  <Route path="/signin" element={<SignIn/>}/>
  <Route index element ={<Home/>}>
  </Route>
  <Route path="admin" element={<Directory getSearch={getSearch} books={filteredBooks}/>}/>
  </Route>
  </Routes>
  ;
}
