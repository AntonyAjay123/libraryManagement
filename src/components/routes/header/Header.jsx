import React, { useState,useEffect } from "react"
import { Outlet,Link } from "react-router-dom";
import './header.styles.scss'
function Header(){
    const [title,setTitle]=useState(" ");
    const [fullTitle] = useState("Library Management")
    const [index,setIndex] = useState(0);
    const [under,setUnder]=useState("")
    useEffect(()=>{
        if(index<fullTitle.length){
            setTimeout(()=>{
                setTitle(title+fullTitle[index])
                setIndex(index+1)
                if(under==="")
                setUnder("_")
                else setUnder("")
            },500)
        }
    },[index,title,fullTitle,under])
    return (<div className="">
        <header><Link className="nav-link" to="/">
        <div className="heading"><h1>{title}{under}</h1></div>
        </Link>
        <div className="nav-links-container">
        <Link className="nav-link" to ="/admin">Admin</Link>
        <Link className="nav-link" to="/signin">SignIn</Link>
        </div></header>
        <Outlet/>
        </div>
      )
}

export default Header;
//