import gql from 'graphql-tag'

export default gql`
  query {
    getMyMatches {
      _id
      date
      firstPlayer
      secondPlayer
      playfield {
        name
      }
      club {
        name
      }
      timeblock {
        name
      }
    }
  }
`
