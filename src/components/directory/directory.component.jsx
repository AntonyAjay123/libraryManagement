import { useState } from "react";
import Book from "../Book"
import Header from "../routes/header/Header";
import { Outlet } from "react-router-dom";
const Directory = (props)=>{
    const books=props.books;
    console.log(books)
    return <div>
    <input  onChange={props.getSearch}type="text"></input>
    <div className="grid-container">
    {books.map((book)=><Book key={book.isbn} {...book}/>)}
    </div>
    <Outlet/>
      </div>
}

export default Directory;