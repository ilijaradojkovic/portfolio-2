import "./style.scss";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
