import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import './pokemon-card-item.css';

import NoPoster from '../../assets/icons/NoPoster.jpg';

const PokemonCardItem = ({ pokemon, idx, onHandleChooseMovie }) => {
  const { name, image } = pokemon;

  const style = `crd crd-${idx}`;

  const poster = image || NoPoster;

  const chooseMovie = useCallback(
    () => {
      onHandleChooseMovie(pokemon.name);
    },
    [pokemon.name, onHandleChooseMovie],
  );

  return (
    <div className={style} data-title={name} role="presentation" onClick={chooseMovie}>
      <Link className="lnk" to="">
        <img src={poster} alt="" className="card-img-top" />
      </Link>
    </div>
  );
};

export default PokemonCardItem;
