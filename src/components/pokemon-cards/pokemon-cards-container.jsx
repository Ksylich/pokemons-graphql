import React from 'react';
import { Query, graphql, compose } from 'react-apollo';

import { getPokemons, getState } from '../../graphql/queries';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import PokemonCards from './pokemon-cards';

const PokemonCardsContainer = ({ localState }) => (
  <Query
    query={getPokemons}
    variables={{ count: localState.pokemonsCount }}
  >
    {({ loading, error, data }) => {
      if (loading) return <Spinner />;
      if (error) return <ErrorIndicator />;

      return (
        <PokemonCards pokemons={data.pokemons} onHandleChoosePokemon={() => {}} />
      );
    }
}
  </Query>
);

export default compose(
  graphql(getState, {
    props: ({ data: { localState } }) => ({
      localState,
    }),
  }),
)(PokemonCardsContainer);
