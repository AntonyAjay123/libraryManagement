import React,{useEffect, useState} from "react";
import books from "../Books";

function Book(props){
    const [status,setStatus]=useState(props.status);
    
    console.log(status)
    function update(){
        setStatus(0);
    }
    return  status==1?<div className="book grid-item" >
    <h3>{props.title}</h3>
    <p>{props.subtitle}</p>
    <p>Author: {props.author}</p>
    <p>Published on: {props.published.substring(0,10)}</p>
    <a href={props.website}><button>Know more</button></a>
    <button onClick={update}>Delete</button>
    </div>:null;
}


export default Book;
