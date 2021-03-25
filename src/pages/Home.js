import React from 'react'
import Find from './components/Find'
import Tiles from './components/Tiles'

const Home = (props) => {
  const { options, selectedCountry, handleCountrySearch, searchResults, handleRegionSearch, selectedRegion } = props
  return(
    <div>
      <Find
        selectedCountry={selectedCountry}
        selectedRegion={selectedRegion}
        handleCountry={handleCountrySearch}
        handleRegion={handleRegionSearch}
        options={options} />
      <Tiles
        searchResults={searchResults} />
    </div>
  )
}

export default Home
