import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import { Provider } from "mobx-react";
import App from "./components/App";
import CountriesModel from "./model/CountriesModel";

ReactDOM.render(
  <React.StrictMode>
    <Provider stores={CountriesModel}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
