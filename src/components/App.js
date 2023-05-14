
import Header from "./Header";
import Footer from "./Footer";
import books from "../Books";
import Book from "./Book"
import { useState } from "react";

export default function App() {
  const [search,setSearch] = useState("");
  const [typed,setTyped]= useState(false);
  function getSearch(event){
    const value=event.target.value;
    setSearch(value);
    console.log(search)
  }
  return<div>
  <Header/>
  <input onChange={getSearch}type="text"></input>
  <div className="grid-container">
  {books.map(book=>
    search===""?
    <Book search={search} typed={typed}key={book.isbn} {...book}/>:
    book.title.includes(search)?
    <Book search={search} typed={typed}key={book.isbn} {...book}/>:null
    )}
  </div>
    </div>
  ;
}
