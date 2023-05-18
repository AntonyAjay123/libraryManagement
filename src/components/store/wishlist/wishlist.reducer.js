import { WISHLIST_ACTION_TYPES } from "./wishlist.types";

const INITIAL_STATE = {
	wishClicked: false,
};

export const wishReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case WISHLIST_ACTION_TYPES.SET_WISHLIST:
			return {
				...state,
				wishClicked: payload,
			};
		default:
			return state;
	}
};
