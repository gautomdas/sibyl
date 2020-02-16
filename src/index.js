import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
// const NewApp =

document.addEventListener("DOMContentLoaded", event => {
  console.log("DOM fully loaded and parsed");
  const rootEl = document.getElementById("root");
  ReactDOM.render(<App isWeb={true} />, rootEl);

  module.hot.accept();
});

// if (module.hot) {
//   module.hot.accept("./App", () => {
//     const NextApp = require("./App").default;
//     ReactDOM.render(<NextApp />, rootEl);
//   });
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
