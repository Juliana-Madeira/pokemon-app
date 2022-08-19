import React from 'react';

import './PokemonCard.css';


const PokemonCard = ({ id, name, type, image }) => {

    const style = `pokemon__card ${type}`;
    
  return (
    <div className={style}>
        <div className='number__card'>
            <small>#0{id}</small>
        </div>
        <img src={image} alt={name} />
        <div className='pokemon__card__detail'>
            <h3>{name}</h3>
            <p>Type: {type}</p>
        </div>
    </div>
  )
}

export default PokemonCard;