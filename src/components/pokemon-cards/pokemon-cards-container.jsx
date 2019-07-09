import React, { Component } from 'react';
import { Query, graphql, compose } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import { getPokemons, getState, changeCurrentPokemon } from '../../graphql/queries';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import PokemonCards from './pokemon-cards';


class PokemonCardsContainer extends Component {
  changePokemon = async (name) => {
    const { changePokemonAction, history } = this.props;
    await changePokemonAction({
      variables: {
        name,
      },
    });
    history.push('/pokemon-details-page');
  };

  render() {
    const { localState } = this.props;
    return (
      <Query
        query={getPokemons}
        variables={{ count: localState.pokemonsCount }}
      >
        {({ loading, error, data }) => {
          if (loading) return <Spinner />;
          if (error) return <ErrorIndicator />;

          return (
            <PokemonCards pokemons={data.pokemons} onHandleChooseMovie={this.changePokemon} />
          );
        }
}
      </Query>
    );
  }
}


export default withRouter(
  compose(
    graphql(changeCurrentPokemon, { name: 'changePokemonAction' }),
    graphql(getState, {
      props: ({ data: { localState } }) => ({
        localState,
      }),
    }),
  )(PokemonCardsContainer),
);
