import gql from 'graphql-tag';

export default gql`
  mutation addToFavorites($name:String!, $image: String!) {
    addToFavorites(name: $name, image: $image) @client {
        localState
    }
}  
`;
