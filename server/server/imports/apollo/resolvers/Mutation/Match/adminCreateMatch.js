import Matches from 'api/collections/Matches'
import Playfields from 'api/collections/Playfields'
import encounterValidation from 'api/helpers/asyncHooks/encounterValidation'

export default async function(root, {data}, context) {
  const playfield = Playfields.findOne(data.playfieldId)
  const matchData = {...data, clubId: playfield.clubId, createdAt: new Date()}
  await encounterValidation(matchData.firstPlayer)
  await encounterValidation(matchData.secondPlayer)
  Matches.insert(matchData)
  return {success: true}
}
