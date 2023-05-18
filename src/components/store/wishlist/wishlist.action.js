import { WISHLIST_ACTION_TYPES } from "./wishlist.types";

export const setWish = (wishState) => ({
	type: WISHLIST_ACTION_TYPES.SET_WISHLIST,
	payload: wishState,
});
