import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { textChangeRangeIsUnchanged } from "typescript";

// Sample Request
// fetch('https://animechan.vercel.app/api/random')
//         .then(response => response.json())
//         .then(quote => console.log(quote))

// Sample Response
// {
// 	anime: '...',
// 	character: '...',
// 	quote: '...'
// }

class Quote extends React.Component {
  state = {
    quote: [],
    character: [],
    anime: [],
    loading: true,
    error: false,
  };
  componentDidMount() {
    fetch("https://animechan.vercel.app/api/random")
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          quote: response.quote,
          character: response.character,
          anime: response.anime,
          loading: false,
        })
      )
      .catch((error) => this.setState({ loading: false, error: true }));
  }
  render() {
    const { quote, character, anime, loading, error } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {loading && <div>LOADING...</div>}
            {!loading && !error && quote}
          </p>
          <p>{character}</p>
          <p>{anime}</p>
        </header>
      </div>
    );
  }
}

export default Quote;
