import { createContext, useContext, useState } from "react";
import books from "../Books";
export const BookContext = createContext({
	curBooks: null,
	setCurBooks: () => {},
	deleteBook: () => {},
});

export const BookProvider = ({ children }) => {
	const [curBooks, setCurBooks] = useState(books);

	function deleteBook(curBooks, bookDelete) {
		const findBook = curBooks.find((book) => book.isbn === bookDelete.isbn);
		const allBooks = curBooks.filter((book) => book.isbn !== bookDelete.isbn);
		findBook.status = 0;
		setCurBooks(() => {
			return [...allBooks, findBook];
		});
		console.log("after delete", curBooks);
	}

	function rent(curBooks, isbn) {
		console.log(isbn);
		console.log("renting");
		const filterBooks = curBooks.filter((book) => book.isbn !== isbn);
		const findBook = JSON.parse(
			JSON.stringify(curBooks.filter((book) => book.isbn == isbn))
		);
		findBook[0].rented = true;
		curUser.rentedBooks.push(findBook[0]);
		console.log("found book", findBook[0]);
		setCurBooks(() => {
			return [...filterBooks, ...findBook];
		});
		//console.log(curBooks);
	}

	const value = { curBooks, setCurBooks, deleteBook, rent };
	return <BookContext.Provider value={value}>{children} </BookContext.Provider>;
};
