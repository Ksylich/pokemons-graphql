import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import './pokemon-card-item.css';

import NoPoster from '../../assets/icons/NoPoster.jpg';

const PokemonCardItem = ({ pokemon, idx, onHandleChoosePokemon }) => {
  const { name, image } = pokemon;

  const style = `crd crd-${idx}`;

  const poster = image || NoPoster;

  const choosePokemon = useCallback(
    () => {
      onHandleChoosePokemon(pokemon.id);
    },
    [pokemon.id, onHandleChoosePokemon],
  );

  return (
    <div className={style} data-title={name} role="presentation" onClick={choosePokemon}>
      <Link className="lnk" to="/pokemon-details-page">
        <img src={poster} alt="" className="card-img-top" />
      </Link>
    </div>
  );
};

export default PokemonCardItem;
