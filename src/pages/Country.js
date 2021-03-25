import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const Country = props => {
  const { searchResults, countries } = props;
  const { countryName } = useParams();

  const [data,setData] = useState({});
  const [languages, setLanguages] = useState([]);
  const [borders, setBorders] = useState([])

  const generateCountryData = countryName => {
    if(searchResults.length){
      const data = searchResults.find(item => item.name.toLowerCase() === countryName.toLowerCase());
      setData(data)
      setLanguages(data.languages)
      setBorders(data.borders)
    }
  }

  useEffect(() => {
    generateCountryData(countryName);
  }, [countryName, generateCountryData]);


  const generatedBorders = () => {
    const bordersArr = [];
    countries
      .filter(each => borders.some((elem) => each.alpha3Code === elem) )
      .map(each => bordersArr.push(each.name))

    return bordersArr
  }

  return(
    <div>
      <Link to='/' className='links home-btn'>Home</Link>
      <div className='country-box'>
        <div>
          <img src={data.flag} alt={data.name} className='img'/>
        </div>

        <div className=''>
          <ul className='country-info-list'>
            <li> <h2>{countryName}</h2> </li>
            <li><strong>Capital:</strong> {data.capital}</li>
            <li><strong>Population:</strong> {data.population}</li>
            <li><strong>Region:</strong> {data.region}</li>
            <li><strong>Sub Region:</strong> {data.subregion}</li>
            <li><strong>Languages:</strong> {languages.map(each => each.name).join(', ')}</li>
            {borders.length > 0
              ? <li className='border-li'>
                  <strong>Borders: </strong>
                  <div className='borders-container'>
                    {generatedBorders().map(each =>
                      <Link to={`/${each}`} className='links borders'>{each}</Link>
                    )}
                  </div>
                </li>
              : null
              }
            </ul>
         </div>
       </div>
   </div>
  )
}

export default Country
