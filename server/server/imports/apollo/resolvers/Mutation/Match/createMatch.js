import Matches from 'api/collections/Matches'
import Playfields from 'api/collections/Playfields'

export default function(root, {data}, context) {
  const playfield = Playfields.findOne(data.playfieldId)
  const matchData = {...data, clubId: playfield.clubId, createdAt: new Date()}
  const matches = Matches.insert(matchData)
  return Matches.findOne(matches)
}
