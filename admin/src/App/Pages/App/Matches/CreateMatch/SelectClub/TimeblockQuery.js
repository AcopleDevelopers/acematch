import gql from 'graphql-tag'

export default gql`
  query getTimeblockForMatches($playfieldId: ID, $startDate: Date, $endDate: Date) {
    getTimeblockForMatches(playfieldId: $playfieldId, startDate: $startDate, endDate: $endDate) {
      _id
      name
      date
      createdAt
      state
      clubId
      matchId
      timeblockId
      activeDays
      startTime
      endTime
      firstPlayer
      secondPlayer
    }
  }
`
