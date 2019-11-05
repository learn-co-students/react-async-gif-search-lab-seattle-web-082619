import React, { Component } from "react";

export default class GifSearch extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input onChange={this.props.handleChange}></input>
        <button>Search for Gifs</button>
      </form>
    );
  }
}
