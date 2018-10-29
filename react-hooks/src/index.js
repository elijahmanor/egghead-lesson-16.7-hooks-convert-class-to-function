import React from "react";
import ReactDOM from "react-dom";
import KeyCode from "./KeyCode4";

import "./index.css";

function App() {
  return (
    <div className="App">
      <KeyCode />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
