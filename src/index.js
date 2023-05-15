import React from "react";
import { ReactDOM,createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './styles.css'

import App from "./components/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);
