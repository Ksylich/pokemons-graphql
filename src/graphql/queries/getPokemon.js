import gql from 'graphql-tag';

export default gql`
  query getPokemon($name: String!){
      pokemon(name: $name){
        attacks{
          fast{
            name
            type
            damage
          }
        }
        resistant
      }
  }
`;
