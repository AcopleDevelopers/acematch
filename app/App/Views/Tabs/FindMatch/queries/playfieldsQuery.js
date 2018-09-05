import gql from 'graphql-tag'

export default gql`
  query($clubId: ID) {
    getClub(clubId: $clubId) {
      playfields {
        _id
        name
        description
        pendingMatches
      }
    }
  }
`
