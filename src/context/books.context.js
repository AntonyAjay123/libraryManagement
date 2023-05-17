import { createContext, useContext, useState, useReducer } from "react";
import { UserContext } from "./user.context";
import books from "../Books";

export const BookContext = createContext({
	curBooks: null,
	setCurBooks: () => {},
	deleteBook: () => {},
	rent: () => {},
});

const INITIAL_STATE = {
	curBooks: books,
};

const BOOK_ACTION_TYPES = {
	SET_BOOKS: "SET_BOOKS",
};

function deleteBook(curBooks, bookDelete) {
	const findBook = curBooks.find((book) => book.isbn === bookDelete.isbn);
	const allBooks = curBooks.filter((book) => book.isbn !== bookDelete.isbn);
	findBook.status = 0;
	return [...allBooks, findBook];
}

const bookReducer = (state, action) => {
	console.log("dispatched");
	console.log(action);
	const { type, payload } = action;
	switch (type) {
		case BOOK_ACTION_TYPES.SET_BOOKS:
			return {
				...state,
				curBooks: payload,
			};
		default:
			throw new Error(`Unhandled Type ${type}`);
	}
};

export const BookProvider = ({ children }) => {
	const { curUser } = useContext(UserContext);
	function rent(curBooks, isbn) {
		console.log(curBooks);
		const filterBooks = curBooks.filter((book) => book.isbn !== isbn);
		const findBook = JSON.parse(
			JSON.stringify(curBooks.filter((book) => book.isbn == isbn))
		);
		findBook[0].rented = true;
		curUser.rentedBooks.push(findBook[0]);
		return [...filterBooks, ...findBook];
	}

	const [state, dispatch] = useReducer(bookReducer, INITIAL_STATE);
	const { curBooks } = state;
	const setCurBooks = (bookState) => {
		dispatch({ type: BOOK_ACTION_TYPES.SET_BOOKS, payload: bookState });
	};
	const deleteFromBooks = (curBooks, bookDelete) => {
		const updatedBooks = deleteBook(curBooks, bookDelete);
		setCurBooks(updatedBooks);
	};

	const rentFromBooks = (curBooks, isbn) => {
		const updatedBooks = rent(curBooks, isbn);
		setCurBooks(updatedBooks);
	};
	const updateBooks = (updatedBooks) => {
		dispatch({ type: BOOK_ACTION_TYPES.SET_BOOKS, payload: updatedBooks });
	};

	const value = { curBooks, setCurBooks, deleteFromBooks, rentFromBooks };
	return <BookContext.Provider value={value}>{children} </BookContext.Provider>;
};
