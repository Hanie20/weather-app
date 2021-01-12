import React from "react";
import ReactDOM from "react-dom";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Container />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
