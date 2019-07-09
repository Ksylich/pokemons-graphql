import React, { useCallback } from 'react';
// import PropTypes from 'prop-types';

import PokemonCardItem from '../pokemon-card-item';

import './pokemon-cards.css';

const PokemonCards = ({ pokemons, onHandleChooseMovie }) => {
  const renderMovie = useCallback(
    pokemon => (
      <PokemonCardItem
        key={pokemon.id}
        pokemon={pokemon}
        idx={pokemons.findIndex(m => m.id === pokemon.id)}
        onHandleChooseMovie={onHandleChooseMovie}
      />
    ),
    [pokemons, onHandleChooseMovie],
  );

  return (
    <div className="body">
      {pokemons.map(renderMovie)}
    </div>
  );
};


export default PokemonCards;
