import gql from 'graphql-tag';

export default gql`
  mutation changeCurrentPokemon($name:String!) {
    changeCurrentPokemon(name: $name) @client {
        localState
    }
}  
`;
