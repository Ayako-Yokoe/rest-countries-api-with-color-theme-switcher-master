import React, { useContext, useState } from 'react';
import { ThemeContext } from '../theme-context';
import './Filter.css'

const Filter = ({ region, setRegion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const handleSelect = (option) => {
    setRegion(option);
    setIsOpen(false);
  }

  return (
    <div className={`select-wrapper ${theme === 'light' ? 'light' : ' dark'}-select-wrapper`}>
      <div className='select-selected' onClick={toggleDropdown}>
        {region}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width='1rem' height='1rem' fill={`${theme === 'light' ? 'var(--color-grey-950-light-mode-text)' : 'var(--color-white)'}`} >
          <path d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z"/>
        </svg>
      </div>

      <div className={`select-items ${theme === 'light' ? 'light' : ' dark'}-select-items ${isOpen ? 'open' : ''}`}>
        {options.map(option => (
          <div key={option} onClick={() => handleSelect(option)}>
            {option}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filter
