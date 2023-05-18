import React, { Fragment, useContext, useEffect, useState } from "react";
import books from "../Books";
import { Link, Outlet, Routes } from "react-router-dom";
import { BookContext } from "../context/books.context";
import { UserContext } from "../context/user.context";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromBooks } from "./store/book/book.action";

const Book = (props) => {
	const dispatch = useDispatch();
	const [status, setStatus] = useState(props.status);
	// const { curBooks, setCurBooks, deleteFromBooks, rentFromBooks } =
	// 	useContext(BookContext);
	const curBooks = useSelector((state) => state.books.curBooks);
	//const { curUser } = useContext(UserContext);
	const curUser = useSelector((state) => state.user.curUser);
	function update(event, book) {
		dispatch(deleteFromBooks(curBooks, book));
	}
	// }

	// function rentBook(event, isbn) {
	// 	rentFromBooks(curBooks, isbn);
	// }
	function rent(event, isbn) {
		console.log(curBooks);
		const filterBooks = curBooks.filter((book) => book.isbn !== isbn);
		const findBook = JSON.parse(
			JSON.stringify(curBooks.filter((book) => book.isbn == isbn))
		);
		findBook[0].rented = true;
		curUser.rentedBooks.push(findBook[0]);
		return [...filterBooks, ...findBook];
	}
	function wishlist() {}

	return props.status == 1 ? (
		<div className="book grid-item">
			<h3>{props.title}</h3>
			<p>{props.subtitle}</p>
			<p>Author: {props.author}</p>
			<p>Published on: {props.published.substring(0, 10)}</p>
			<Link to={`/bookdetail/${props.isbn}`}>Know more</Link>

			{curUser.role === "admin" ? (
				<button onClick={(event) => update(event, props)}>Delete</button>
			) : props.dashboard == false ? (
				<button onClick={(event) => rent(event, props.isbn)}>Rent</button>
			) : null}

			<Outlet />
		</div>
	) : null;
};

export default Book;
