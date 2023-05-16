import React from "react";
import { ReactDOM,createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './styles.css'
import { BookProvider } from "./context/books.context";
import App from "./components/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
    <BookProvider>
    <App/>
    </BookProvider>
    </BrowserRouter>
);
