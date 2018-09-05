import Matches from 'api/collections/Matches'

export default function(root, {matchId, data}, context) {
  Matches.update(matchId, {$set: data})
  return Matches.findOne(matchId)
}
