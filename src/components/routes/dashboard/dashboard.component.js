import React, { useContext } from "react";
import { UserContext } from "../../../context/user.context";
import Book from "../../Book";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Dashboard() {
	//const { curUser, serUser } = useContext(UserContext);
	const curUser = useSelector((state) => state.user.curUser);
	const books = curUser.rentedBooks;
	console.log("rented books", books);
	return (
		<div className="grid-container">
			{books.map((book) => (
				<Book dashboard={true} {...book} />
			))}
		</div>
	);
}
