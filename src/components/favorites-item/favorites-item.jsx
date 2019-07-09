import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import './favorites-item.css';

import NoPoster from '../../assets/icons/NoPoster.jpg';

const FavoriteItem = ({ pokemon, onHandleRemovePokemon, onHandleChoosePokemon }) => {
  const poster = pokemon.image || NoPoster;

  const choosepokemon = useCallback(
    () => {
      onHandleChoosePokemon(pokemon.name); 
    },
    [pokemon.name, onHandleChoosePokemon],
  );

  const removepokemon = useCallback(
    () => {
      onHandleRemovePokemon(pokemon.name);
    },
    [pokemon.name, onHandleRemovePokemon],
  );

  return (
    <div className="item-list">
      <div className="item">
        <div onClick={choosepokemon} role="presentation" className="image_fav">
          <Link className="lnk" to="/pokemon-details-page">
            <img src={poster} alt="Smiley face" />
          </Link>
        </div>
        <div className="info">
          <div className="fav-info-top">
            <div className="fav-title">{pokemon.name}</div>
            <button onClick={removepokemon} type="button" className="btn btn-default">
                Unfavorite
            </button>
          </div>
          {/* <div className="overview-fav">{`${pokemon.overview}`}</div> */}
        </div>
      </div>
    </div>
  );
};


export default FavoriteItem;
