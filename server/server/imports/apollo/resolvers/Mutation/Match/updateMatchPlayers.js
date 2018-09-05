import Matches from 'api/collections/Matches'
import encounterValidation from 'api/helpers/asyncHooks/encounterValidation'

export default async function(
  root,
  {matchId, firstPlayer, secondPlayer},
  context
) {
  if (!firstPlayer) {
    throw new Error('Debes ingresar almenos el primer jugador.')
  }
  const match = Matches.findOne(matchId)
  if (firstPlayer !== match.firstPlayer && firstPlayer !== match.secondPlayer) {
    await encounterValidation(firstPlayer)
  }
  if (
    secondPlayer !== match.firstPlayer &&
    secondPlayer !== match.secondPlayer
  ) {
    await encounterValidation(secondPlayer)
  }
  Matches.update(matchId, {
    $set: {firstPlayer: firstPlayer, secondPlayer: secondPlayer}
  })
  return {success: true}
}
