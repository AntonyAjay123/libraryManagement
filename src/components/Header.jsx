import React, { useState,useEffect } from "react"
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
    return <header><div className="heading"><h1>{title}{under}</h1></div></header>
}

export default Header;