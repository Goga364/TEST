import React from 'react'
import {Link} from 'react-router-dom'

const Tile = props => {
  const { obj } = props;
  const formatNumber = number => {
    let result = new Intl.NumberFormat().format(number)
    return result.split(',').join(' ')
  }

  return(
    <div className='each-tile' >
      <Link to={`/${obj.name}`}   className='each-tile-link' >
        <img
          className='flag'
          src={obj.flag}
          alt={obj.name} />

        <div className='tile-description'>
          <p className='country-name'>{obj.name}</p>
          <p><span>Population:</span> {formatNumber(obj.population)} <br/>
          <span>Region:</span> {obj.region} <br/>
          <span>Capital:</span> {obj.capital}</p>
        </div>
      </Link>
    </div>
  )
}

export default Tile
