import gql from 'graphql-tag'

export default gql`
  query getTimeblockForMatches($from: Date, $to: Date, $playfieldId: ID) {
    getTimeblockForMatches(
      playfieldId: $playfieldId
      startDate: $from
      endDate: $to
    ) {
      _id
      name
      date
      timeblockId
      startTime
      endTime
      firstPlayer
      secondPlayer
    }
  }
`
