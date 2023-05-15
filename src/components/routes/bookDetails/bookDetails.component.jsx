import React from "react"
import { useParams } from "react-router-dom";
import books from "../../../Books";

function BookDetails(){
    const {isbn} = useParams();
    console.log(isbn);
    const book = books.filter((book)=>book.isbn===isbn)
    console.log(book)
    return <div>
    <h1>Title: {book[0].title}</h1>
    <h3>Author: {book[0].author}</h3>
    <p>Pages : {book[0].pages}</p>
    <p>Publisher: {book[0].publisher}</p>
    <p>Published on :{book[0].published}</p>
    </div>
}

export default BookDetails;