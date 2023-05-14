
import Header from "./Header";
import Footer from "./Footer";
import books from "../Books";
import Book from "./Book"
import { useState,useEffect } from "react";

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
    const value=event.target.value;
    setSearch(value.toLowerCase());
  }
  return<div>
  <Header/>
  <input onChange={getSearch}type="text"></input>
  <div className="grid-container">
  {filteredBooks.map((book)=><Book key={book.isbn} {...book}/>)}
  </div>
    </div>
  ;
}
