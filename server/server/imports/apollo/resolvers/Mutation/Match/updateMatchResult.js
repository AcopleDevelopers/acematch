import Matches from 'api/collections/Matches'
import Users from 'api/collections/Users'

export default function(root, {matchId, result, winner}, context) {
  const match = Matches.findOne(matchId)
  const winnerId = match.firstPlayer === winner ? match.firstPlayer : match.secondPlayer
  const looserId = match.firstPlayer === winner ? match.secondPlayer : match.firstPlayer
  if (!match.winner) {
    Users.update(winnerId, {$inc: {playedGames: 1, wonMatches: 1}})
    Users.update(looserId, {$inc: {playedGames: 1, lostMatches: 1}})
  } else if (match.winner !== winner) {
    Users.update(winnerId, {$inc: {wonMatches: 1, lostMatches: -1}})
    Users.update(looserId, {$inc: {lostMatches: 1, wonMatches: -1}})
  }

  Matches.update(matchId, {$set: {result: result, winner}})

  return {success: true}
}
