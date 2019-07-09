import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import FavoritesList from './favorites-list';
import { getState, changeCurrentPokemon, removePokemon } from '../../graphql/queries';


class FavoritesListContainer extends Component {
  onHandleRemovePokemon = (name) => {
    const { removePokemonAction } = this.props;
    removePokemonAction({
      variables: {
        name,
      },
    });
  }

  changePokemon = async (name) => {
    const { changePokemonAction } = this.props;
    await changePokemonAction({
      variables: {
        name,
      },
    });
  };

  render() {
    const { localState } = this.props;
    return (
      <FavoritesList
        favorites={localState.favorites}
        onHandleChoosePokemon={this.changePokemon}
        onHandleRemovePokemon={this.onHandleRemovePokemon}
      />
    );
  }
}

export default withRouter(
  compose(
    graphql(removePokemon, { name: 'removePokemonAction' }),
    graphql(changeCurrentPokemon, { name: 'changePokemonAction' }),
    graphql(getState, {
      props: ({ data: { localState } }) => ({
        localState,
      }),
    }),
  )(FavoritesListContainer),
);
