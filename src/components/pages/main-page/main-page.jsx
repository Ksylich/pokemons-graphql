import React from 'react';

import './main-page.css';

import PokemonCardsContainer from '../../pokemon-cards';

const MainPage = () => (
  <div className="main">
    <div className="label">Pokemons</div>
    <PokemonCardsContainer />
  </div>
);

export default MainPage;
