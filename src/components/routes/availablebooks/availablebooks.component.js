import React, { useContext } from "react";
import { BookContext } from "../../../context/books.context";
import { UserContext } from "../../../context/user.context";
import { Link, Outlet } from "react-router-dom";
import Wishlist from "../wishlist/wishlist.component";
import "../../../styles.css";
import { useSelector, useDispatch } from "react-redux";
import { setCurBooks } from "../../store/book/book.action";
export default function AvailableBooks() {
	const dispatch = useDispatch();
	//const { curBooks, setCurBooks, rentFromBooks } = useContext(BookContext);
	const curBooks = useSelector((state) => state.books.curBooks);
	//const { curUser, setUser } = useContext(UserContext);
	const curUser = useSelector((state) => state.user.curUser);
	function rent(event, isbn) {
		console.log(curBooks);
		console.log(curUser);
		const filterBooks = curBooks.filter((book) => book.isbn !== isbn);
		const findBook = JSON.parse(
			JSON.stringify(curBooks.filter((book) => book.isbn == isbn))
		);
		findBook[0].rented = true;
		curUser.rentedBooks.push(findBook[0]);
		dispatch(setCurBooks([...filterBooks, ...findBook]));
	}

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
							<button onClick={(event) => rent(event, props.isbn)}>Rent</button>
						) : (
							<p>Rented</p>
						)}
					</div>
				) : null;
			})}
		</div>
	);
}
