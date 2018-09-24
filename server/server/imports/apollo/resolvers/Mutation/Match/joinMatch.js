import Matches from 'api/collections/Matches'
import Playfields from 'api/collections/Playfields'
import enabledSchedule from 'api/helpers/enabledSchedule'
import Users from 'api/collections/Users'
import encounterValidation from 'api/helpers/asyncHooks/encounterValidation'
import {getSubscription} from 'meteor/orionsoft:qvo-graphql'
import matchFilter from 'api/helpers/Match/matchFilter'

export default async function(root, {data}, context) {
  const currentDate = new Date()
  if (!enabledSchedule(currentDate, data.date)) {
    throw new Error('Solo se puede crear o entrar a un match hasta las 19:00 del día anterior')
  }
  // Check for existing match
  const startDayDate = data.date
  const endDayDate = data.date
  const existingMatch = Matches.findOne({
    timeblockId: data.timeblockId,
    date: {$gte: startDayDate, $lte: endDayDate},
    playfieldId: data.playfieldId
  })

  const user = Users.findOne(context.userId)
  const subscription = await getSubscription(user.subscriptionId)
  if (!matchFilter(subscription, context.userId)) {
    throw new Error('Solo puedes agendar una cierta cantidad de matches al mes segun tu plan')
  }

  let matchId
  if (existingMatch) {
    // If there is an existing match check if it has a free spot
    if (existingMatch.firstPlayer && existingMatch.secondPlayer) {
      throw new Error('Bloque tomado')
    }

    // Check if the match creator is the same as the contestant
    if (existingMatch.firstPlayer === context.userId) {
      throw new Error('No puedes jugar contra tí mismo')
    }
    
    const playerInMatch = Users.findOne({_id: existingMatch.firstPlayer})
    const actualPlayer = Users.findOne(context.userId)

    // Check that both players are the same category
    if (playerInMatch.expertiseLevel !== actualPlayer.expertiseLevel) {
      throw new Error(
        'Solo puedes jugar contra jugadores que tengan el mismo nivel de experiencia.'
      )
    }

    // Set the player to the free spot
    matchId = existingMatch._id
    await encounterValidation(context.userId)
    Matches.update(matchId, {$set: {secondPlayer: context.userId}})
  } else {
    // If there is not an existing match, create it
    const playfield = Playfields.findOne(data.playfieldId)
    await encounterValidation(context.userId)
    matchId = Matches.insert({
      ...data,
      clubId: playfield.clubId,
      firstPlayer: context.userId,
      createdAt: currentDate
    })
  }

  return Matches.findOne(matchId)
}
