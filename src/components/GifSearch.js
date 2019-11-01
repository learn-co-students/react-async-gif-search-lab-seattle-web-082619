import React from 'react'

export default class GifSearch extends React.Component {

  state = {
    searchInput: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSearchByKeyWord(this.state.searchInput)
    this.setState({
      searchInput: ''
    })
  }

  handleFormInput = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
            value={this.state.searchInput} 
            onChange={this.handleFormInput} 
            placeholder={this.props.previewText}/>
          <button type="submit" className="btn-success">Search For Gifs</button>
        </form>
      </div>
    )
  }
}
