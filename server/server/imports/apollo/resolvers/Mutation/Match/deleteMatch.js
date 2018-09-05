import Matches from 'api/collections/Matches'

export default function(root, {matchId}, context) {
  Matches.remove(matchId)
  return {success: true}
}
