import React, { useContext } from "react";
import { UserContext } from "../../../context/user.context";
import Book from "../../Book";

export default function Dashboard() {
	const { curUser, serUser } = useContext(UserContext);
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
