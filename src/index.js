import React from "react";
import {ReactDOM, createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import './styles.css'
import {BookProvider} from "./context/books.context";
import App from "./components/App";
import {AuthProvider} from "./context/auth.context";
import {UserContext, UserProvider} from "./context/user.context";
import {WishlistProvider} from "./context/wishlist.context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
        <AuthProvider>
            <UserProvider>
            <WishlistProvider>
                <BookProvider>
                        <App/>
                </BookProvider>
                </WishlistProvider>
            </UserProvider>
        </AuthProvider>
    </BrowserRouter>
);
