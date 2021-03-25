import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './pages/Home';
import Country from './pages/Country';
import './index.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const options = [
  { value: 'all', label: 'All' },
  { value: 'africa', label: 'Africa' },
  { value: 'americas', label: 'Americas' },
  { value: 'asia', label: 'Asia' },
  { value: 'europe', label: 'Europe' },
  { value: 'oceania', label: 'Oceania' }
]

const App = () => {
  const [selectedRegion, setSelectedRegion] = useState(options[0]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  const filterByRegion = arr => {
    if (selectedRegion.value !== 'all') {
      return arr.filter(item => item.region.toLowerCase() === selectedRegion.value);
    }
    return arr;
  }

  useEffect(() => {
    let results

    results = countries.filter(each =>
      each.name.toLowerCase().includes(selectedCountry.toLowerCase())
    )
    results = filterByRegion(results)

    setSearchResults(results);
  }, [countries, selectedCountry, selectedRegion, filterByRegion])



  const handleCountrySearch = (event) => {
    setSelectedCountry(event.target.value);
  }
  const handleRegionSearch = (event) => {
    setSelectedRegion(event)
  }

  return(
    <div>
      <Router>
        <Switch>
          <Route path={`/:countryName`}>
            <Country
              searchResults={searchResults}
              countries={countries} />
          </Route>

          <Route path='/'>
            <Home
              selectedCountry={selectedCountry}
              handleCountrySearch={handleCountrySearch}
              handleRegionSearch={handleRegionSearch}
              selectedRegion={selectedRegion}
              searchResults={searchResults}
              options={options} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
