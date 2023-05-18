import React, { useContext } from "react";
import "./wishlist.styles.scss";
import { WishlistContext } from "../../../context/wishlist.context";
import { setWish } from "../../store/wishlist/wishlist.action";
import { useSelector } from "react-redux";

export default function Wishlist() {
	//const { wishClicked, setWish } = useContext(WishlistContext);
	const wishClicked = useSelector((state) => state.wish.wishClicked);
	return (
		wishClicked && (
			<div className="wishlist-dropdown-container">
				<div className="wishlist-items"></div>
			</div>
		)
	);
}
