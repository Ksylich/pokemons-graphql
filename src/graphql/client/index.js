import { ApolloClient, ApolloLink, InMemoryCache } from 'apollo-boost';
import { withClientState } from 'apollo-link-state';
import { createHttpLink } from 'apollo-link-http';


const cache = new InMemoryCache();

const defaultState = {
  localState: {
    __typename: 'localState',
    pokemons: [],
    favorites: [],
    currentPokemon: 1,
    pokemonsCount: 151,
  },
};

const resolvers = {};

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
