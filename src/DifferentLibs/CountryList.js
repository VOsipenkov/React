import React, { Component } from "react";
import fetch from "isomorphic-fetch";

class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      countries: []
    };
  }

  componentDidMount() {
    const loading = true;
    this.setState({ loading });

    const url = "https://restcountries.eu/rest/v1/all";
    const countries = fetch(url)
      .then(response => response.json())
      .then(json => json.map(country => country.name))
      .then(countries => this.setState({ countries, loading: false }));
    console.log(countries);
  }

  render() {
    const { countries, loading } = this.state;
    console.log(countries);
    return (
      <div>
        {loading
          ? "process loading countries.."
          : countries.length === 0
            ? "coutries list empty"
            : countries.map((c, i) => <li key={i}>{c}</li>)}
      </div>
    );
  }
}

export default CountryList;
