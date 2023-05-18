export const setCurBooks = (bookState) => {
	({ type: BOOK_ACTION_TYPES.SET_BOOKS, payload: bookState });
};
