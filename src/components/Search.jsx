import React, { useContext } from 'react';
import { ThemeContext } from '../theme-context';
import './Search.css'

const Search = ({ query, onChange }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`search-wrapper ${theme === 'light' ? 'light' : ' dark'}-search-wrapper`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width='1.3rem' height='1.3rem' fill={`${theme === 'light' ? 'rgba(0, 0, 0, 0.3)' : 'var(--color-white)'}`}>
        <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"/>
      </svg>
      <input
        name='search'
        value={query}
        placeholder='Search for a country...'
        className={`search-input ${theme === 'light' ? 'light' : ' dark'}-search-input`}
        onChange={onChange}
      />
    </div>
  )
}

export default Search
