// // Path: copilot_test\src\index.js
// // Compare this snippet from copilot_test\src\App.js:
// //
//messenger app like whatsapp web with createRoot: index.js
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom";
import "./index.css";
import App from "./App";
// ReactDOM.render(<App />, document.getElementById("root"));
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
const root = createRoot(document.getElementById("root"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
//
