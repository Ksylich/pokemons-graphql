import React, { useCallback } from 'react';
// import PropTypes from 'prop-types';

import PokemonCardItem from '../pokemon-card-item';

import './pokemon-cards.css';

const PokemonCards = ({ pokemons }) => {
  const renderMovie = useCallback(
    pokemon => (
      <PokemonCardItem
        key={pokemon.id}
        pokemon={pokemon}
        idx={pokemons.findIndex(m => m.id === pokemon.id)}
      />
    ),
    [pokemons],
  );

  return (
    <div className="body">
      {pokemons.map(renderMovie)}
    </div>
  );
};


export default PokemonCards;
