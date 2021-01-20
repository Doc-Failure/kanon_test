import React, { Component } from "react";
//import axios from "axios";
class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = { countryName: "", countriesResponse: "" };

    this.handleCountryName = this.handleCountryName.bind(this);
  }

  async componentDidMount() {
    //let countryResult = await axios.get("https://restcountries.eu/rest/v2/all");
    //countryResult.data;
    //Use react or Mobx to add data to a list
  }

  handleCountryName = (event) => {
    //Use redux or momx to filter the element of the list
  };

  render() {
    return (
      <div style={{ border: "1px solid" }}>
        <br />
        <h1>Question Number 3</h1>
        <br />
        <input
          type="text"
          id="filter"
          name="filter"
          onChange={this.handleCountryName}
        />
        <br />
      </div>
    );
  }
}

export default Countries;
