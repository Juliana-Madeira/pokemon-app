import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';


const Navbar = () => {
    const imageLogo = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'

  return (
    <nav className='navbar'>
        <Link to='/'>
            <img src={imageLogo} alt="Pokeapi Logotipo" className='navbar__pokelogo'/>
        </Link>
    </nav>
  )
}

export default Navbar;