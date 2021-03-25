import React from 'react'
import Tile from './Tile'

const Tiles = props => {
  const { searchResults } = props;
  return(
    <div className='tiles-container'>
      {searchResults.map(obj =>
          <Tile obj={obj} key={obj.name} />
      )}
    </div>
  )
}

export default Tiles
