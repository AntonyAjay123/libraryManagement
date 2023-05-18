const deleteFromBooks = (curBooks, bookDelete) => {
	const updatedBooks = deleteBook(curBooks, bookDelete);
	setCurBooks(updatedBooks);
};

const rentFromBooks = (curBooks, isbn) => {
	const updatedBooks = rent(curBooks, isbn);
	setCurBooks(updatedBooks);
};
