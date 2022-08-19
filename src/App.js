import React, { useEffect, useState } from 'react';
import { getAllPokemons } from './utils/api.utils';

import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';
import Home from './pages/Home/Home';

import './App.css';


function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getAllPokemons();
      setPokemons(data);
      setLoading(false);
    } catch (error) {
      console.log('fetchPokemons:', error)
    }
  }


  useEffect(( ) => { 
    console.log('carregou useEffect')
    fetchPokemons()

  } , []);
  
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Home pokemons={pokemons} loading={loading}/>
    </div>
  );
}

export default App;
