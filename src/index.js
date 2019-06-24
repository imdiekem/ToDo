import React from "react";
import ReactDOM from "react-dom";

import ListMaker from "./containers/ListMaker";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ListMaker />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
