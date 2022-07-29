import React, { useState }from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

import { searchPokemon } from '../utils/api';

import '../styles/SearchBar.css';


const SearchBar = () => {
    const[search, setSearch] = useState("");
    const[pokemon, setPokemon] = useState();

    

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();   
    }

    const handleClick = (e) => {
        handleSearch(search);
    }

    const handleSearch = async (pokemon) => {
        const result = await searchPokemon(pokemon);
        console.log('pokemon', pokemon)
        setPokemon(result);
      }
    

  return (
    <form className='searchbar' onSubmit={handleSubmit}>
        <input  
            type="text"
            placeholder='Search'
            className="searchbar__input"
            onChange={handleChange}
        />
        <button 
            type='submit'
            className='searchbar__button'
            onClick={handleClick}
        >
            <BiSearchAlt2/>
        </button>
        {pokemon && (
            <>
                <p>Name: {pokemon.name}</p>
                <p>Weight: {pokemon.weight}</p>
                <p>Height: {pokemon.height}</p>
                <p><img src={pokemon.sprites.front_default} alt={pokemon.name} /></p>
            </>
        )}
    </form>
   
  )
}

export default SearchBar;