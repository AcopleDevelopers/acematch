import Matches from 'api/collections/Matches'

export default function(playfield, params, context) {
  const today = new Date()
  return Matches.find({playfieldId: playfield._id, date: {$gte: today}}).count()
}
