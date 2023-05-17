import React, { Fragment, useContext, useEffect, useState } from "react";
import books from "../Books";
import { Link, Outlet, Routes } from "react-router-dom";
import { BookContext } from "../context/books.context";
import { UserContext } from "../context/user.context";

const Book = (props) => {
	const [status, setStatus] = useState(props.status);
	const { curBooks, setCurBooks, deleteBook, rent } = useContext(BookContext);
	const { curUser } = useContext(UserContext);
	function update(event, book) {
		console.log("updatinnnngg");
		// setCurBooks((prev) => {
		// 	console.log("here context", prev, isbn);
		// 	const filtered = prev.filter((book) => book.isbn != isbn);
		// 	return [...filtered];
		// });

		// setStatus(0);
		deleteBook(curBooks, book);
	}

	function rentBook(event, isbn) {
		rent(curBooks, isbn);
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
				<button onClick={(event) => rentBook(event, props.isbn)}>Rent</button>
			) : null}

			<Outlet />
		</div>
	) : null;
};

export default Book;
