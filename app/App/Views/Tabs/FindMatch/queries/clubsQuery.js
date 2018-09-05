import gql from 'graphql-tag'

export default gql`
  query {
    clubs {
      _id
      name
      createdAt
      picture {
        url
      }
    }
  }
`
