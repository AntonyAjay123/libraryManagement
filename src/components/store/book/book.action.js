import { BOOK_ACTION_TYPES } from "./book.types";
export const setCurBooks = (bookState) => {
	return { type: BOOK_ACTION_TYPES.SET_BOOKS, payload: bookState };
};
export const deleteFromBooks = (curBooks, bookDelete) => {
	console.log("deleting");
	const updatedBooks = deleteBook(curBooks, bookDelete);
	console.log("updated books", updatedBooks);
	return { type: BOOK_ACTION_TYPES.SET_BOOKS, payload: updatedBooks };
};

export const rentFromBooks = (curBooks, isbn) => {
	const updatedBooks = rent(curBooks, isbn);
	return { type: BOOK_ACTION_TYPES.SET_BOOKS, payload: updatedBooks };
};
function deleteBook(curBooks, bookDelete) {
	const findBook = curBooks.find((book) => book.isbn === bookDelete.isbn);
	const allBooks = curBooks.filter((book) => book.isbn !== bookDelete.isbn);
	findBook.status = 0;
	return [...allBooks, findBook];
}
