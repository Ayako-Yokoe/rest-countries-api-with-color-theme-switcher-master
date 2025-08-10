import React, { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../theme-context';
import './List.css';
import Search from './Search';
import Filter from './Filter';
import { handleSearch } from '../utils/search';
import { handleFilter } from '../utils/filter';

const List = ({ data }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const { theme } = useContext(ThemeContext);

  // Scroll To Top
  const topRef = useRef(null);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedCountry]);

  // Search Data
  const [query, setQuery] = useState('');
  const searchingData = handleSearch(data, query);

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  // Filter Data
  const [region, setRegion] = useState('Filter by Region');
  const filteredData = handleFilter(searchingData, region);

  const handleDetailPage = (country) => {
    const selected = filteredData.filter(d => d.name === country);
    setSelectedCountry(selected[0]);
  }

  // Border Countries
  const borderCountries = selectedCountry?.borders?.map(countryCode => {
    return data.find(d => d.alpha3Code === countryCode)
  }).filter(Boolean) ?? [];

  return (
    <div className={`container ${theme === 'light' ? 'light' : 'dark'}-container`}>

    {!selectedCountry ? (
      <>
        <div className='search-filter-wrapper'>
          <Search
            query={query}
            onChange={handleChange}
          />
          <Filter
            region={region}
            setRegion={setRegion}
          />
        </div>

        <ul className='list-wrapper'>
          {filteredData.map(d => (
            <li 
              key={d.numericCode}
              className={`list-card ${theme === 'light' ? 'light' : 'dark'}-list-card`}
              onClick={() => handleDetailPage(d.name)}
            >
              <img 
                src={d.flags.svg} 
                alt={`The flag of ${d.name}`} 
                className='list-card-flag'
              />
              <div className='list-card-detail'>
                <h2 className='country-name'>{d.name}</h2>
                <p className='polulation'><span>Population:</span> {d.population.toLocaleString()}</p>
                <p className='region'><span>Region:</span> {d.region}</p>
                <p className='capital'><span>Capital:</span> {d.capital}</p>
              </div>
            </li>
          ))}
        </ul>
      </>
    ) : (
      <div className='detail-container' ref={topRef}>
        <button className={`back-btn ${theme === 'light' ? 'light' : 'dark'}-back-btn`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="1rem" fill={`${theme === 'light' ? 'var(--color-grey-950-light-mode-text)' : 'var(--color-white)'}`}>
            <path d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z"/>
          </svg>
          <span onClick={() => setSelectedCountry(null)}>Back</span>
        </button>

        <div className='country-detail'>
          <img src={selectedCountry.flags.svg} className='detail-img' />
          <div className='detail-description-container'>
            <h3 className='detail-country-name'>{selectedCountry.name}</h3>

            <div className='detail-description-wrapper'>
              <div className='detail-description'>
                <p><span>Native Name:</span> {selectedCountry.nativeName}</p>
                <p><span>Population: </span>{selectedCountry.population.toLocaleString()}</p>
                <p><span>Region: </span>{selectedCountry.region}</p>
                <p><span>Sub Region: </span>{selectedCountry.subregion}</p>
                <p><span>Capital: </span>{selectedCountry.capital}</p>
              </div>
              
              <div className='detail-description'>
                <p><span>Top Level Domain:</span> {selectedCountry.topLevelDomain[0]}</p>
                <p><span>Currencies: </span>{selectedCountry.currencies?.length > 0 ? selectedCountry.currencies[0].name : []}</p>
                <p>
                  <span>Languages: </span>
                  {selectedCountry.languages.map((language, index) => {
                    return (
                      <span key={index} style={{ fontWeight: '300'}}>
                        {language.name}{selectedCountry.languages.length - 1 > index ? ',' : ''}{' '}
                      </span>
                    )
                  })}
                  </p>
              </div>
            </div>

            <div className='border-countries'>
              <h4 className='border-countries-title'>Border Countries:</h4>
              <ul className='border-countries-lists'>
                  {(borderCountries ?? []).map(country => (
                    <li 
                      key={country.numericCode}
                      className={`border-countries-list ${theme === 'light' ? 'light' : 'dark'}-border-countries-list`}
                      onClick={() => {
                        setSelectedCountry(country)
                      }}
                    >
                      {country.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )}
    </div>
  )
}

export default List
