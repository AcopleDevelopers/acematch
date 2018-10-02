import moment from 'moment'

export default (user) => {
  let totalMatches = 0
  let today = moment()
  const matchesToPlay = user.matchesToPlay || []
  matchesToPlay.forEach((matchData, index) => {
    if (today.isBefore(moment(matchData.dueDate))) {
      totalMatches += matchData.amount
    }
  })
  return totalMatches
}

