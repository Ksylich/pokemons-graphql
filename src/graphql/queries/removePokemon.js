import gql from 'graphql-tag';

export default gql`
 mutation removePokemon($name: String!) {
     removePokemon(name: $name) @client {
         localState
     }
 }
`;
