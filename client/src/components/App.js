import React from "react";
import "../style/App.css";
import Countries from "./Countries";
import FilterComponent from "./FilterComponent";

function App() {
  return (
    <div className="App">
      <Countries />
      <FilterComponent />
    </div>
  );
}

export default App;
