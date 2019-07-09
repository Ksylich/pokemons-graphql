import { ApolloClient, ApolloLink, InMemoryCache } from 'apollo-boost';
import { withClientState } from 'apollo-link-state';
import { createHttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';


const cache = new InMemoryCache();

const defaultState = {
  localState: {
    __typename: 'localState',
    favorites: [],
    currentPokemon: '',
    pokemonsCount: 151,
  },
};

const resolvers = {
  Mutation: {
    addToFavorites: (_, { name, image }, { cache }) => {
      const query = gql`
          query GetCurrentState {
            localState @client {
              favorites
              currentPokemon
              pokemonsCount
            }
          }
        `;
      const previous = cache.readQuery({ query });

      const data = {
        localState: {
          ...previous.localState,
          favorites: [...previous.localState.favorites, { name, image }],
        },
      };

      cache.writeQuery({ query, data });
    },
    changeCurrentPokemon: (_, { name }, { cache }) => {
      const query = gql`
          query GetCurrentState {
            localState @client {
              favorites
              currentPokemon
              pokemonsCount
            }
          }
        `;
      const previous = cache.readQuery({ query });

      const data = {
        localState: {
          ...previous.localState,
          currentPokemon: name,
        },
      };

      cache.writeQuery({ query, data });
    },
  },
};

const stateLink = withClientState({
  cache,
  defaults: defaultState,
  resolvers,
});

const httpLink = createHttpLink({
  uri: 'https://graphql-pokemon.now.sh/',
});

const client = new ApolloClient({
  link: ApolloLink.from([stateLink, httpLink]),
  cache,
});

export default client;
