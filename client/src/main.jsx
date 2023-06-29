import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/style.css";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { ThemeProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>
);