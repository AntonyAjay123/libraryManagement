import { createContext, useState, useReducer } from "react";

export const UserContext = createContext({
	curUser: null,
	setUser: () => {},
});

const USER_ACTION_TYPES = {
	SET_USER: "SET_USER",
};
const INITIAL_STATE = {
	curUser: {
		name: "",
		role: "",
		email: "",
		password: "",
	},
};

const userReducer = (state, action) => {
	const { type, payload } = action;
	console.log("user payload", payload);
	switch (type) {
		case USER_ACTION_TYPES.SET_USER:
			return {
				...state,
				curUser: payload,
			};
		default:
			throw new Error(`Unhandled type ${type}`);
	}
};
export const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
	const { curUser } = state;

	const setUser = (user) => {
		dispatch({ type: USER_ACTION_TYPES.SET_USER, payload: user });
	};
	const value = { curUser, setUser };
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
