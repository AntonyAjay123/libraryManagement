import React from "react";
import { ReactDOM, createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import { BookProvider } from "./context/books.context";
import App from "./components/App";
import { AuthProvider } from "./context/auth.context";
import { UserContext, UserProvider } from "./context/user.context";
import { WishlistProvider } from "./context/wishlist.context";
import { Provider } from "react-redux";
import { setUser } from "./components/store/user/user.action";
import { store } from "./components/store/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<AuthProvider>
				<WishlistProvider>
					<BookProvider>
						<App />
					</BookProvider>
				</WishlistProvider>
			</AuthProvider>
		</BrowserRouter>
	</Provider>
);
