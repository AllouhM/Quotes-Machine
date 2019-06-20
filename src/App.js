import React, { Component } from "react";
import axios from "axios";
import Interface from "./components/Interface";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      error: false,
      loading: false,
      errorMessage: ""
    };
  }
  componentDidMount() {
    this.fetchNewQuote();
  }

  fetchNewQuote = async () => {
    this.setState({ loading: true });
    try {
      const fetchQuote = await axios.get(
        "https://aitorp6.herokuapp.com/quotes/api/random"
      );
      const newQuotes = fetchQuote.data.quotes;
      this.setState({ quotes: [newQuotes], loading: false });
    } catch (error) {
      this.setState({
        error: true,
        loading: false,
        errorMessage: error.message
      });
      console.log(error);
    }
  };
  render() {
    const { quotes, error, errorMessage, loading } = this.state;

    return (
      <div>
        {loading ? (
          <div className="loading">Loading please wait .......</div>
        ) : quotes.length ? (
          <Interface quotes={quotes} handleChange={this.fetchNewQuote} />
        ) : null}
        {error && loading === false ? (
          <div className="error">{errorMessage}</div>
        ) : null}
      </div>
    );
  }
}

export default App;
