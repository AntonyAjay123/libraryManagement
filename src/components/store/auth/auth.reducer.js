import { AUTH_ACTION_TYPES } from "./auth.types";

const INITIAL_STATE = {
	auth: false,
};

export const authReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case AUTH_ACTION_TYPES.SET_AUTH:
			return {
				...state,
				auth: payload,
			};
		default:
			return state;
	}
};
