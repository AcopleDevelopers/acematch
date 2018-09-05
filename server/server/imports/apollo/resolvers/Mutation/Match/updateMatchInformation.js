import Matches from 'api/collections/Matches'
import Playfields from 'api/collections/Playfields'

export default function(root, {matchId, data}, context) {
  const playfield = Playfields.findOne(data.playfieldId)
  Matches.update(matchId, {
    $set: {
      clubId: playfield.clubId,
      playfieldId: data.playfieldId,
      timeblockId: data.timeblockId,
      date: data.date
    }
  })
  return {success: true}
}
