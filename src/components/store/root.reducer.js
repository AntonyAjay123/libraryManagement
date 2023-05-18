import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { bookReducer } from "./book/book.reducer";
import { authReducer } from "./auth/auth.reducer";
import { wishReducer } from "./wishlist/wishlist.reducer";

export const rootReducer = combineReducers({
	user: userReducer,
	books: bookReducer,
	auth: authReducer,
	wish: wishReducer,
});
