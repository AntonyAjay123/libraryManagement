import React, { useContext } from "react";
import { BookContext } from "../../../context/books.context";
import { UserContext } from "../../../context/user.context";
import { Link, Outlet } from "react-router-dom";
import Wishlist from "../wishlist/wishlist.component";
import "../../../styles.css";

export default function AvailableBooks() {
	const { curBooks, setCurBooks, rentFromBooks } = useContext(BookContext);
	const { curUser, setUser } = useContext(UserContext);

	return (
		<div className="grid-container">
			{curBooks.map((props) => {
				return props.status === 1 ? (
					<div className="book grid-item">
						<h3>{props.title}</h3>
						<p>{props.subtitle}</p>
						<p>Author: {props.author}</p>
						<p>Published on: {props.published.substring(0, 10)}</p>
						<Link to={`/bookdetail/${props.isbn}`}>Know more</Link>
						<Outlet />{" "}
						{props.rented == false ? (
							<button onClick={(event) => rentFromBooks(curBooks, props.isbn)}>
								Rent
							</button>
						) : (
							<p>Rented</p>
						)}
					</div>
				) : null;
			})}
		</div>
	);
}
