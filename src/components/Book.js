import React,{Fragment, useEffect, useState} from "react";
import books from "../Books";
import { Link, Outlet, Routes } from "react-router-dom";

function Book(props){
    const [status,setStatus]=useState(props.status);
    
    console.log(status)
    function update(){
        setStatus(0);
    }
    return status==1?
    <div className="book grid-item" >
    <h3>{props.title}</h3>
    <p>{props.subtitle}</p>
    <p>Author: {props.author}</p>
    <p>Published on: {props.published.substring(0,10)}</p>
    <Link to={`/bookdetail/${props.isbn}`}>Know more
    </Link>
    <Outlet/>
    <button onClick={update}>Delete</button>
    </div>:null
}


export default Book;
