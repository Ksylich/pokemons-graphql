import React, { Component } from 'react';
import { Query, graphql, compose } from 'react-apollo';
import { withLastLocation } from 'react-router-last-location';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';


import PokemonDetails from '../pokemon-details';
import {
  getPokemons, getState, getPokemon, changeCurrentPokemon,
} from '../../graphql/queries';

let pokemonsArr;

class PokemonDetailsContainer extends Component {
  onNextClick = () => {
    const { changePokemonAction, localState } = this.props;


    const next = pokemonsArr.findIndex(pkmn => pkmn.name === localState.currentPokemon) + 1;

    const nextName = next >= pokemonsArr.length ? pokemonsArr[0].name : pokemonsArr[next].name;


    changePokemonAction({
      variables: {
        name: nextName,
      },
    });
  }


  returnArr = (pokemons) => {
    const { localState, lastLocation } = this.props;
    return lastLocation.pathname === '/' ? pokemons : localState.favorites;
  }


  checkIsFavorite(pokemon) {
    const { localState } = this.props;
    return !localState.favorites.find(mov => mov.name === pokemon.name);
  }

  render() {
    const { localState } = this.props;
    // console.log('localState', localState);
    const name = localState.currentPokemon;
    return (
      <Query query={getPokemons} variables={{ count: localState.pokemonsCount }}>
        {({ loading: loadingOne, error: errorOne, data: { pokemons } }) => (
          <Query query={getPokemon} variables={{ name }}>
            {({ lloading: loadingTwo, error: errorTwo, data: { pokemon } }) => {
              if (loadingOne || loadingTwo) return <Spinner />;
              if (errorOne || errorTwo) return <ErrorIndicator />;
              pokemonsArr = this.returnArr(pokemons);
              // console.log('pokemon', pokemon);

              if (pokemon !== undefined) {
                const isFavorite = this.checkIsFavorite(pokemon);
                return (
                  <PokemonDetails
                    pokemon={pokemon}
                    isFavorite={isFavorite}
                    onHandleNext={this.onNextClick}
                  />
                );
              }
              return <Spinner />;
            }}
          </Query>
        )}
      </Query>
    );
  }
}


export default withLastLocation(
  compose(
    graphql(changeCurrentPokemon, { name: 'changePokemonAction' }),
    graphql(getState, {
      props: ({ data: { localState } }) => ({
        localState,
      }),
    }),
  )(PokemonDetailsContainer),
);
