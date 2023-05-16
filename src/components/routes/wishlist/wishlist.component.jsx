import React, { useContext } from "react";
import './wishlist.styles.scss'
import { WishlistContext } from "../../../context/wishlist.context";

export default function Wishlist(){
    console.log("wishlisting")
    const {wishClicked,setWish}=useContext(WishlistContext);
    return (
        wishClicked &&
        <div className="wishlist-dropdown-container">
        <div className="wishlist-items">
        </div>
        </div>
    
    )
}