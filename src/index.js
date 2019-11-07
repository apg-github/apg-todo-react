import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//function to sort localstorage object before send it by props
const compareArrays = (a, b) => {
  const key1 = a[0];
  const key2 = b[0];

  let comparison = 0;
  if (key1 > key2) {
    comparison = 1;
  } else if (key1 < key2) {
    comparison = -1;
  }
  return comparison;
};

const plainLoc = Object.entries(localStorage);
const loc = plainLoc.sort(compareArrays);

ReactDOM.render(<App loc={loc} />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
