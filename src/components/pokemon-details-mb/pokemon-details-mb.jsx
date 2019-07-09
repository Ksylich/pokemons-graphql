import React from 'react';


import star from '../../assets/icons/US_Army_Star.png';
import NoPoster from '../../assets/icons/NoPoster.jpg';

import './pokemon-details-mb.css';


const MobPokemonInformation = ({ pokemon, addToFavorites, btnStyle }) => {
  const poster = pokemon.image || NoPoster;
  return (
    <div className="desk-m">
      <div className="deck-top">
        <div className="image">
          <img src={poster} alt="Smiley face" />
        </div>
        <div className="info-mob">
          <div className="info-top">
            <div className="score-mob">
              <div className="txt">Types:</div>
              <div className="txt-data">{pokemon.types[0]}</div>
            </div>
            <div onClick={addToFavorites} role="presentation" className={`icon ${btnStyle}`}>
              <img src={star} alt="Smiley face" height={150} width={150} />
            </div>
          </div>
          <div className="score-mob">
            <div className="txt">MaxHP:</div>
            <div className="txt-data">{pokemon.maxHP}</div>
          </div>
          <div className="score-mob">
            <div className="txt">Classification:</div>
            <div className="txt-data">{pokemon.classification}</div>
          </div>
        </div>
      </div>
      <div className="desk-bottom">
        <div className="mob-pokemon-title">{`${pokemon.name}`}</div>
      </div>
    </div>
  );
};


export default MobPokemonInformation;
