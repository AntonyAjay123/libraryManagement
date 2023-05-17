import { createContext, useState, useReducer } from "react";
import books from "../Books";

const bool = false;
export const AuthContext = createContext({
	auth: null,
	setAuth: () => {},
});

const AUTH_ACTION_TYPES = {
	SET_AUTH_CONTEXT: "SET_AUTH_CONTEXT",
};
const INITIAL_STATE = {
	auth: false,
};

const authReducer = (state, action) => {
	console.log("dispatch");
	console.log(action);
	const { type, payload } = action;
	switch (type) {
		case AUTH_ACTION_TYPES.SET_AUTH_CONTEXT:
			return {
				...state,
				auth: payload,
			};
			break;
		default:
			throw new Error(`Unhandled Type ${type}`);
	}
};

export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);
	const { auth } = state;
	console.log(auth);
	const setAuth = (authState) => {
		dispatch({ type: AUTH_ACTION_TYPES.SET_AUTH_CONTEXT, payload: authState });
	};
	//const [auth, setAuth] = useState(false);
	const value = { auth, setAuth };
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
