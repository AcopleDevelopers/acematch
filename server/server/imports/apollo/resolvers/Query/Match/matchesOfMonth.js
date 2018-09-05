import Matches from 'api/collections/Matches'
import getSameMonth from 'api/helpers/getSameMonth'

export default function(root, params, context) {
  const matches = Matches.find().fetch()
  if (!matches) return []
  let monthMatches = []
  for (const match of matches) {
    if (getSameMonth(match.date)) {
      monthMatches.push(match)
    }
  }
  return monthMatches
}
