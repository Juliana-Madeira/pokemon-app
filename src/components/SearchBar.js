import React from 'react';
import {BiSearchAlt2} from 'react-icons/bi';

import '../styles/SearchBar.css';

const SearchBar = () => {
  return (
      <form className='searchbar'>
        <input type="text" placeholder='Search' className='searchbar__input' />
        <button type='submit' className='searchbar__button'>
            <BiSearchAlt2/>
        </button>
      </form>
  )
}

export default SearchBar;