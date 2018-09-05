import Matches from 'api/collections/Matches'
import getSameDay from 'api/helpers/getSameDay'

export default function(root, params, context) {
  const matches = Matches.find().fetch()
  const actualDate = new Date()
  if (!matches) return []
  let dailyMatches = []
  for (const match of matches) {
    if (getSameDay(match.date, actualDate)) {
      dailyMatches.push(match)
    }
  }
  return dailyMatches
}
