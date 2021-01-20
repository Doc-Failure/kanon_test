import React, { Component } from "react";
import axios from "axios";
class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = { countryName: "", countriesResponse: "" };

    this.getCountry = this.getCountry.bind(this);
    this.handleCountryName = this.handleCountryName.bind(this);
  }

  getCountry = async (event) => {
    let countryResult = await axios.get(
      "/api/v1/countryByName?country=" + this.state.countryName
    );
    this.setState({ countriesResponse: JSON.stringify(countryResult.data[0]) });
  };

  getCountries = async (event) => {
    console.log(this.state.countryName);
    let countryResult = await axios.get(
      "/api/v1/countriesByName?countries=" + this.state.countryName
    );
    this.setState({ countriesResponse: JSON.stringify(countryResult.data[0]) });
  };

  handleCountryName = (event) => {
    this.setState({ countryName: event.currentTarget.value });
  };

  render() {
    return (
      <div>
        <label>
          Insert the name of one full Country and the press Get Country Ex.
          <br />
          Malta or more than one name of Country divided by commas{" "}
        </label>
        <br />
        <br />
        <label>Country Name: </label>
        <input
          type="text"
          id="countryName"
          name="countryName"
          onChange={this.handleCountryName}
        />
        <button onClick={this.getCountry}>Get Country</button>
        <button onClick={this.getCountries}>Get Countries</button>
        <br />
        <textarea value={this.state.countriesResponse} readOnly />
      </div>
    );
  }
}

export default Countries;
