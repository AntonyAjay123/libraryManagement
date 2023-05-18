import { useReducer } from "react";
import books from "../../../Books";
import { BOOK_ACTION_TYPES } from "./book.types";
import { useDispatch } from "react-redux";

const INITIAL_STATE = {
	curBooks: books,
};

export const bookReducer = (state = INITIAL_STATE, action) => {
	//const dispatch = useDispatch();
	console.log("reducer reached");
	const { type, payload } = action;
	switch (type) {
		case BOOK_ACTION_TYPES.SET_BOOKS:
			return {
				...state,
				curBooks: payload,
			};
		default:
			return state;
	}
};
