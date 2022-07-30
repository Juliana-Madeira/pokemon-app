import React, { useState, useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';

import '../styles/Home.css';


const Home = () => {
  const baseURL = 'https://pokeapi.co/api/v2/pokemon?limit=20'

  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(baseURL);

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);
  

  const createPokemonObject = (results) => {
    results.forEach( async pokemon => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      const data = await res.json(); 

      setAllPokemons(currentList => [...currentList, data]);
      
    })
  }
    createPokemonObject(data.results)
    await console.log(allPokemons)
  }
 
  useEffect(() => {
    getAllPokemons()
  }, [])
  

  return (
    <div className='home'>
      <div className='home__header'>
        <h1>Pokedex</h1>
        <div>Pagination</div>
      </div>
      <div className='button__load__more'>
        <button type='button' className='load__more'>Load More</button>
      </div>
      {allPokemons.map((pokemon, index) => 
        <PokemonCard 
        key={index}
        id={pokemon.id}
        name={pokemon.name}
        image={pokemon.sprites.other.home.front_default}
        type={pokemon.types[0].type.name}
        />
      )}      
    </div>
  )
}

export default Home;