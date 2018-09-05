import Matches from 'api/collections/Matches'
import enabledSchedule from 'api/helpers/enabledSchedule'

export default function(root, {matchId}, context) {
  const match = Matches.findOne(matchId)
  if (!match) throw new Error('no se encontró el match')
  if (match.result) throw new Error('Este match ya se jugó')
  const actualDate = new Date()
  if (!enabledSchedule(actualDate, match.date)) {
    throw new Error(
      'Solo se puede cancelar una participación en un match hasta las 19:00 del día anterior'
    )
  }
  if (match.firstPlayer === context.userId) {
    if (match.secondPlayer) {
      Matches.update(matchId, {$set: {firstPlayer: match.secondPlayer, secondPlayer: null}})
    } else {
      Matches.remove(matchId)
    }
  } else {
    Matches.update(matchId, {$set: {secondPlayer: null}})
  }
  return {success: true}
}
