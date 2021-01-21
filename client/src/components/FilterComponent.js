import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { addCountry, setFilter } from "../redux/actions";
class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = { countryName: "", countriesResponse: "" };

    this.handleCountryName = this.handleCountryName.bind(this);
  }

  async componentDidMount() {
    let countryResult = await axios.get("https://restcountries.eu/rest/v2/all");
    for (let i = 0; i < countryResult.data.length; i++) {
      let value = countryResult.data[i];
      this.props.addCountry({
        name: value.name,
        nativeName: value.nativeName,
        alpha2Code: value.alpha2Code,
      });
    }
  }

  handleCountryName = (event) => {
    this.props.setFilter(event.currentTarget.value);
  };

  render() {
    console.log(this.props);
    let CountryList = this.props.countries
      ? this.props.countries.map((value, index) => {
          return (
            <div key={index}>
              <p>
                <b>Name: </b>
                {value.content.name}
                <b> nativeName: </b>
                {value.content.nativeName}
                <b> alpha2Code: </b>
                {value.content.alpha2Code}
              </p>
            </div>
          );
        })
      : "";
    return (
      <div style={{ border: "1px solid" }}>
        <br />
        <h1>Question Number 3</h1>
        <br />
        <label>Name Filter: </label>
        <input
          type="text"
          id="filter"
          name="filter"
          onChange={this.handleCountryName}
        />
        <br />
        {CountryList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const countriesList = state.country || {};
  const countries = countriesList.countries.filter((value) => {
    return value.content.name.includes(state.visibilityFilter);
  });
  return { countries };
};

export default connect(mapStateToProps, { addCountry, setFilter })(Countries);
