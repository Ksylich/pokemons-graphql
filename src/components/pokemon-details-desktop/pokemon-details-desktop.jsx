import React from 'react';


import './pokemon-details-desktop.css';

import NoPoster from '../../assets/icons/NoPoster.jpg';


const DecktopPokemonInformation = ({ pokemon, addToFavorites, btnStyle }) => {
  const poster = pokemon.image || NoPoster;

  return (
    <div className="container">
      <div className="desk">
        <div className="image">
          <img src={poster} alt="Smiley face" />
        </div>
        <div className="info">
          <div className="row top">
            <button onClick={addToFavorites} type="button" className={`btn btn-default ${btnStyle}`}>
              Add to favorite
            </button> 
          </div>
          <div className="pokemon-title">{`${pokemon.name}`}</div>
          <div className="about">
            <div className="score">{`Types: ${pokemon.types[0]}`}</div>
            <div className="language">{`MaxHP:  ${pokemon.maxHP}`}</div>
            <div className="realise-date">
              {`Classification: ${pokemon.classification}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DecktopPokemonInformation;
