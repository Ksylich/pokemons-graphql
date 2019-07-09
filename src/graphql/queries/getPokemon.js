import gql from 'graphql-tag';

export default gql`
  query getPokemon($name: String!){
      pokemon(name: $name){
        name
        image
        types
        classification
        maxHP
      }
  }
`;
