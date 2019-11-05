import React, { Component, Fragment } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component {
  state = {
    gifsBeingRendered: [],
    searchInput: ""
  };

  componentDidMount() {
    this.fetchGifs();
  }

  fetchGifs = (query = "cats") => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=10`
    )
      .then(res => res.json())
      .then(gifInfo =>
        this.setState({
          gifsBeingRendered: gifInfo.data
        })
      );
  };

  //search handlers
  handleChange = e => {
    const newSearchInput = e.target.value;
    this.setState({
      searchInput: newSearchInput
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.fetchGifs(this.state.searchInput);
  };

  //where would this belong if I were to return an array of Image components
  renderGifList = () => {
    return this.state.gifsBeingRendered.map(gif => {
      return (
        <img key={gif.id} src={gif.images.downsized.url} alt={gif.title} />
      );
    });
  };

  render() {
    return (
      <Fragment>
        <GifSearch
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <GifList gifList={this.renderGifList} />
      </Fragment>
    );
  }
}
