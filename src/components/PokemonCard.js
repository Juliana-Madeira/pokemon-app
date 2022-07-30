import React from 'react';

const PokemonCard = ({ id, name, type, image }) => {
  return (
    <div className='pokemon__card'>
        <div className='number__card'>
            <small>#0{id}</small>
        </div>
        <img src={image} alt={name} />
        <div className='pokemon__card__detail'>
            <h3>{name}</h3>
            <small>Type: {type}</small>
        </div>
    </div>
  )
}

export default PokemonCard;