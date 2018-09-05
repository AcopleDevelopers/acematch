import gql from 'graphql-tag'

export default gql`
  mutation($userId: ID, $picture: FileInput) {
    setUserProfile(userId: $userId, profile: {picture: $picture}) {
      _id
    }
  }
`
