import gql from 'graphql-tag';

export default gql`
    query {
        localState @client {
            pokemons
            favorites
            currentPokemon
            pokemonsCount
        }
    }
`;
