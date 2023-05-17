import { USER_ACTION_TYPES } from "./user.types";
const INITIAL_STATE = {
	curUser: {
		name: "",
		role: "",
		email: "",
		password: "",
	},
};

export const userReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	console.log("user payload", payload);
	switch (type) {
		case USER_ACTION_TYPES.SET_USER:
			return {
				...state,
				curUser: payload,
			};
		default:
			return state;
	}
};
