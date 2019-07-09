import gql from 'graphql-tag';

export default gql`
    query {
        localState @client {
            favorites
            currentPokemon
            pokemonsCount
        }
    }
`;
