import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

  state = {
    query: 'dogs',
    gifs: []
  }

  componentDidMount () {
    this.getGifs();
  } 

  getGifs = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(gifs => this.selectFirstThreeGifs(gifs.data))
  }

  selectFirstThreeGifs = (gifs) => {
    const firstThreeGifs = []
    for (let i = 0; i < 3; i++) {
      firstThreeGifs.push(gifs[i])
    }
    this.setState({
      gifs: firstThreeGifs
    })
  }

  searchByKeyWord = (searchTerm) => {
    this.setState({
      query: searchTerm
    }, this.getGifs)
  }

  render () {
    return (
      <div>
        <GifSearch onSearchByKeyWord={this.searchByKeyWord} previewText={this.state.query}/>
        <GifList gifs={this.state.gifs}/>
      </div>
    )
  }
}
