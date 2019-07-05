import gql from 'graphql-tag';

export default gql`
  query getPokemons($count: Int!){
    pokemons(first: $count){
        name
        image
        id
      }
  }
`;
