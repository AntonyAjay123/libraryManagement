import { AUTH_ACTION_TYPES } from "./auth.types";

export const setAuth = (authState) => ({
	type: AUTH_ACTION_TYPES.SET_AUTH,
	payload: authState,
});
