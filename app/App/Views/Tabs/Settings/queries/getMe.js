import gql from 'graphql-tag'

export default gql`
  query me {
    me {
      _id
      email
      subscription {
        id
        plan {
          id
        }
      }
      profile {
        firstName
        lastName
        weight
        height
        category
      }
    }
  }
`
