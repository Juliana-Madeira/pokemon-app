import React, { useState } from 'react';
import { searchOnePokemon } from '../../utils/api.utils';

import {BiSearchAlt2} from 'react-icons/bi';

import './SearchBar.css';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState();

  const handleSearch = (e) => {
    onSearchHandler(search)
  };

  const onSearchHandler = async (pokemon) => {
    const resultSearch = await searchOnePokemon(pokemon)
    setPokemon(resultSearch);
    console.log(resultSearch)
  };

   return (
      <div className='searchbar'>
        <input 
          type="text" 
          placeholder='Search' 
          className='searchbar__input'
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit' className='searchbar__button' onClick={handleSearch}>
            <BiSearchAlt2/>
        </button>
        {pokemon ? (
          <div>
            <span>{pokemon.name}</span>
            <img src= {pokemon.sprites.front_default} alt={pokemon.name}/>
          </div>
        ) : null }
      </div>
  )
}

export default SearchBar;