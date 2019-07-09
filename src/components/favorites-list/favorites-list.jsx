import React, { useCallback } from 'react';

import './favorites-list.css';

import FavoritesItem from '../favorites-item';

const FavoritesList = ({
  favorites,
  onHandleRemovePokemon,
  onHandleChoosePokemon,
}) => {
  const renderPokemon = useCallback(
    pokemon => (
      <FavoritesItem
        key={`favorite-item${pokemon.name}`}
        pokemon={pokemon}
        onHandleChoosePokemon={onHandleChoosePokemon}
        onHandleRemovePokemon={onHandleRemovePokemon}
      />
    ),
    [onHandleChoosePokemon, onHandleRemovePokemon],
  );
  return (
    <div className="container-fav">
      <div className="label-fav">My favorite</div>
      {favorites.map(renderPokemon)}
    </div>
  );
};

export default FavoritesList;
