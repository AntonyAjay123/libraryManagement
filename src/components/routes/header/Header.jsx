import React, {useState, useEffect, useContext} from "react"
import {Outlet, Link, Navigate} from "react-router-dom";
import {AuthContext} from "../../../context/auth.context";
import {UserContext} from "../../../context/user.context";
import './header.styles.scss'
import Wishlist from "../wishlist/wishlist.component";
import { WishlistContext } from "../../../context/wishlist.context";

function Header() {
    const [title,
        setTitle] = useState(" ");
    const [fullTitle] = useState("Library Management")
    const [index,
        setIndex] = useState(0);
    const [under,
        setUnder] = useState("")


    const {auth, setAuth} = useContext(AuthContext)
    const {curUser, setUser} = useContext(UserContext)
    const {wishClicked,setWish} = useContext(WishlistContext)


    console.log(curUser)
    useEffect(() => {
        if (index < fullTitle.length) {
            setTimeout(() => {
                setTitle(title + fullTitle[index])
                setIndex(index + 1)
                if (under === "") 
                    setUnder("_")
                else 
                    setUnder("")
            }, 500)
        }
    }, [index, title, fullTitle, under])

    function handleSignOut() {
        setAuth(false);
        setUser({name: "", role: "", email: "", password: ""})
        return <Navigate to="/" replace={true}/>
    }

    function handleWish(){
        console.log(wishClicked,"clickedd")
        if(wishClicked==false)
        setWish(true)
        else setWish(false)
    }
    return (
        <div className="">
            <header>
                <Link className="nav-link" to="/">
                    <div className="heading">
                        <h1>{title}{under}</h1>
                    </div>
                </Link>
                <div className="nav-links-container">
                    {curUser.role === "user" && <Link className="nav-link" to={`/yourbooks/${curUser.id}`}>Dashboard</Link>}
                    {auth===true && curUser.role=="user" && <Link onClick={handleWish}className="nav-link">Wishlist</Link>}
                    {curUser.role === "admin"
                        ? <Link className="nav-link" to="/admin">Admin Portal</Link>
                        : <Link className="nav-link" to="availablebooks">Available Books</Link>
}
                    {auth === false
                        ? <Link className="nav-link" to="/signin">SignIn</Link>
                        : <Link onClick={handleSignOut} className="nav-link" to="/">Sign out</Link>
}
                </div>
            </header>
            <div></div>
            {auth == true
                ? <h5>Hello {curUser.name}</h5>
                : null}
                <Wishlist/>
            <Outlet/>
        </div>
    )
}

export default Header;
//