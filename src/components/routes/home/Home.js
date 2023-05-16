import React, { Fragment, useContext } from "react";
import books from "../../../Books";
import { BookContext } from "../../../context/books.context";

export default function Home(){
  const {curBooks} = useContext(BookContext)
    return <Fragment>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">ISBN</th>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
      <th scope="col">publisher</th>
    </tr>
    </thead>
    <tbody>
    {curBooks.map((book)=>{
        return book.status===1?
        <tr key={book.isbn}>
        <th scope="row">{book.isbn}</th>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.publisher}</td>
        </tr>:null;
    })}
    </tbody>
  </table>
    </Fragment>
    
}
