import { USER_ACTION_TYPES } from "./user.types";
export const setUser = (user) => {
	dispatch({ type: USER_ACTION_TYPES.SET_USER, payload: user });
};
