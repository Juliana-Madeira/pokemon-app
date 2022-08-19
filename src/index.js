import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import Home from './pages/Home/Home';
import PokemonDetails from './pages/PokemonDetails/PokemonDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path='/' element={<Home />}/>
          <Route path='pokemon/:id' element={<PokemonDetails />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

