import React, { Component } from 'react';
import { Query, graphql, compose } from 'react-apollo';
import { withLastLocation } from 'react-router-last-location';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';


import PokemonDetails from '../pokemon-details';
import { getPokemons, getState, getPokemon } from '../../graphql/queries';

class PokemonDetailsContainer extends Component {
  onNextClick = () => null

  returnArr = (pokemons) => {
    const { localState, lastLocation } = this.props;
    return lastLocation.pathname === '/' ? pokemons : localState.favorites;
  }

  getPokemonFromApi = name => (
    <Query
      query={getPokemon}
      variables={{ name }}
    >
      {({ loading, error, data }) => {
        if (loading) return <Spinner />;
        if (error) return <ErrorIndicator />;

        return data.pokemon;
      }}
    </Query>
  )

  findCurrentPokemon = () => {
    const name = window.location.pathname.match(/\/([^\/]+)\/?$/)[1];

    console.log(name); // yields: "/js" (where snippets run)

    const pokemon = this.getPokemonFromApi(name);

    return pokemon;
  }

  checkIsFavorite(pokemon) {
    const { localState } = this.props;
    return !localState.favorites.find(mov => mov.id === pokemon.id);
  }

  render() {
    const { localState } = this.props;
    return (
      <Query query={getPokemons} variables={{ count: localState.pokemonsCount }}>
        {({ loading, error, data }) => {
          if (loading) return <Spinner />;
          if (error) return <ErrorIndicator />;

          const mvs = this.returnArr(data.pokemons);
          const pokemon = this.findCurrentPokemon();
          console.log('pokemon', pokemon);
          const isFavorite = this.checkIsFavorite(pokemon);
          return (
            // <PokemonDetails pokemon={data.pokemons} isFavorite={isFavorite} onHandleNext={this.onNextClick} pokemons={mvs} />
            <div>PokemonDetails</div>
          );
        }
}
      </Query>
    );
  }
}


export default withLastLocation(
  compose(
    graphql(getState, {
      props: ({ data: { localState } }) => ({
        localState,
      }),
    }),
  )(PokemonDetailsContainer),
);
