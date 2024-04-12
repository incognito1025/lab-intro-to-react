import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
);


//App component will be main component
//Render will accept a single element
//StrictMode 