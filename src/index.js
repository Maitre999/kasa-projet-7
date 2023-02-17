import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// ReactDom render App component in the root div element of the index.html file
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
