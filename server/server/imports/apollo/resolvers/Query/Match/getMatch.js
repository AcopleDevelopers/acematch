import Matches from 'api/collections/Matches'

export default function(root, {matchId}, context) {
  return Matches.findOne(matchId)
}
