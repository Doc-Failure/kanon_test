import React, { Component } from "react";
import { observer } from "mobx-react";
import axios from "axios";
class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = { countryName: "" };

    this.getCountry = this.getCountry.bind(this);
    this.handleCountryName = this.handleCountryName.bind(this);
  }

  getCountry = async (event) => {
    let countryResult = await axios.get(
      "/api/v1/countryByName?country=" + this.state.countryName
    );
    alert("Server Respond " + countryResult);
  };

  getCountries = (event) => {
    alert("Hello" + this.state.countryName);
  };

  handleCountryName = (event) => {
    debugger;
    this.setState({ countryName: event.currentTarget.value });
  };

  render() {
    return (
      <div>
        <label>Country Name: </label>
        <input
          type="text"
          id="countryName"
          name="countryName"
          onChange={this.handleCountryName}
        />
        <button onClick={this.getCountry}>Get Country</button>
        <button onClick={this.getCountries}>Get Country</button>
      </div>
    );
  }
}

export default observer(Countries);
