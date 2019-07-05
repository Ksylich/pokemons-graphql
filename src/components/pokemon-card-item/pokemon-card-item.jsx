import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import './pokemon-card-item.css';

import NoPoster from '../../assets/icons/NoPoster.jpg';

const PokemonCardItem = ({ pokemon, idx }) => {
  const { name, image } = pokemon;

  const style = `crd crd-${idx}`;

  const poster = image || NoPoster;

  return (
    <div className={style} data-title={name} role="presentation">
      <Link className="lnk" to={`/pokemon-details-page/${name}`}>
        <img src={poster} alt="" className="card-img-top" />
      </Link>
    </div>
  );
};

export default PokemonCardItem;
