import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { graphql, compose } from 'react-apollo';

import './pokemon-details.css';

import { DecktopNav, DecktopPokemonInformation } from '../pokemon-details-desktop';
import { MobNav, MobPokemonInformation } from '../pokemon-details-mb';
import NoPoster from '../../assets/icons/NoPoster.jpg';
import { addToFavorites, changeCurrentPokemon } from '../../graphql/queries';


class PokemonDetails extends Component {
  addToFavorites = () => {
    const { addToFavoritesAction, pokemon } = this.props;
    addToFavoritesAction({
      variables: {
        name: pokemon.name,
        image: pokemon.image,
      },
    });
  };

  goBack = () => {
    const { changePokemonAction, history } = this.props;
    changePokemonAction({
      variables: {
        name: '',
      },
    });
    history.goBack();
  }

  render() {
    const {
      pokemon, isFavorite, onHandleNext,
    } = this.props;
    const style = classNames({ hidden: !isFavorite });
    const poster = pokemon.image || NoPoster;
    const sectionStyle = {
      backgroundImage: `url(${poster})`,
    };

    return (
      <div className="wrapper">
        <div className="section" style={sectionStyle} />
        <div className="content">
          <MobNav onHandleBack={this.goBack} onHandleNext={onHandleNext} />
          <MobPokemonInformation
            pokemon={pokemon}
            btnStyle={style}
            addToFavorites={this.addToFavorites}
          />
          <DecktopNav onHandleBack={this.goBack} onHandleNext={onHandleNext} />
          <DecktopPokemonInformation
            pokemon={pokemon}
            btnStyle={style}
            addToFavorites={this.addToFavorites}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(
  compose(
    graphql(changeCurrentPokemon, { name: 'changePokemonAction' }),
    graphql(addToFavorites, { name: 'addToFavoritesAction' }),
  )(PokemonDetails),
);
