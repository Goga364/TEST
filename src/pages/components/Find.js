import React from 'react'
import Select from 'react-select'

const styles = {
  option: (provided) => ({
    ...provided,
    borderBottom: '1px dotted black'
  }),
  control: (styles, state) => ({
    ...styles,
    height: '40px',
    borderRadius: '0 40px 40px 0',
    boxShadow: 'none',
    border: 'none',
    borderLeft: '1px solid #ecf0f1',
    '&:hover': {
      borderLeft: '1px solid #ecf0f1'
    },

  }),
  indicatorSeparator: styles => ({
    ...styles,
    display: 'none'
  })
}

const Find = props => {
  const { options, selectedCountry, handleCountry, handleRegion } = props;
  return(
    <div className='search-filter-container'>
        <input
          id='search-box'
          value={selectedCountry}
          onChange={handleCountry}
          placeholder='Search by country name...' />

        <div className='filter-box'>
          <Select
            options={options}
            styles={styles}
            placeholder='Select Region'
            onChange={handleRegion} />
        </div>
    </div>
  )
}

export default Find
