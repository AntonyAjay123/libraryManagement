import { createContext, useContext, useState, useReducer } from "react";
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

function deleteBook(curBooks, bookDelete) {
	const findBook = curBooks.find((book) => book.isbn === bookDelete.isbn);
	const allBooks = curBooks.filter((book) => book.isbn !== bookDelete.isbn);
	findBook.status = 0;
	return [...allBooks, findBook];
}

function rent(curBooks, isbn) {
	console.log(isbn);
	const filterBooks = curBooks.filter((book) => book.isbn !== isbn);
	const findBook = JSON.parse(
		JSON.stringify(curBooks.filter((book) => book.isbn == isbn))
	);
	findBook[0].rented = true;
	curUser.rentedBooks.push(findBook[0]);
	return [...filterBooks, ...findBook];
}

export const BookProvider = ({ children }) => {
	const [curBooks, setCurBooks] = useState(books);

	const deleteFromBooks = (curBooks, bookDelete) => {
		const updatedBooks = deleteBook(curBooks, bookDelete);
		setCurBooks(updatedBooks);
	};

	const rentFromBooks = (curBooks, isbn) => {
		const updatedBooks = rebt(curBooks, isbn);
		setCurBooks(updatedBooks);
	};

	const value = { curBooks, setCurBooks, deleteFromBooks, rentFromBooks };
	return <BookContext.Provider value={value}>{children} </BookContext.Provider>;
};
