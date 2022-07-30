import React from 'react';

import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Home from './pages/Home';

import './App.css';

function App() {


  return (
    <div className="App">
      <Navbar />
      <SearchBar/>
      <Home />
    </div>
  );
}

export default App;
