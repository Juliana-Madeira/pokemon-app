import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PokemonCard from '../../components/PokemonCard/PokemonCard';

import '../PokemonDetails/PokemonDetails.css';


const PokemonDetails = () => {

    const baseURL = 'https://pokeapi.co/api/v2/pokemon/';

    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null); 

    const getOnePokemon = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setPokemon(data);
    }

    useEffect(() => {
        const onePokemonUrl = `${baseURL}${id}`
        getOnePokemon(onePokemonUrl)
    }, [id]);

  return (
    <div className='pokemon__details'>
        {pokemon && ( 
        <>
        <PokemonCard pokemon={pokemon}/>
        </>
        )}
    </div>
  )
}

export default PokemonDetails