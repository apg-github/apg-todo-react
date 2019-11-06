import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//const updateFromLocalStorage = () => {
const loc = Object.entries(localStorage);
//console.log(loc);
//};

window.addEventListener("DOMContentLoaded", event => {
  console.log("DOM fully loaded and parsed");
  //updateFromLocalStorage();
});
ReactDOM.render(<App loc={loc} />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
