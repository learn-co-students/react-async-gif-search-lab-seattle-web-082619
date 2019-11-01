import React, { PureComponent} from 'react'

export default class GifList extends PureComponent {

  displayGifs = (gifList) => {
    return gifList.map(gif => { 
      return (
        <div key={gif.id}>
          <img src={gif.images.original.url} width="250px" alt="gif.title" />
        </div>
      )
    })
  }

  render () {
    return (
      <div>
        {this.displayGifs(this.props.gifs)}
      </div>
    )
  }
}
