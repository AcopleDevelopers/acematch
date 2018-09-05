import Matches from 'api/collections/Matches'
import Users from 'api/collections/Users'

export default function(playfield, params, context) {
  const today = new Date()
  const matches = Matches.find({
    playfieldId: playfield._id,
    date: {$gte: today},
    secondPlayer: null
  }).fetch()
  const currentUser = Users.findOne(context.userId)
  return matches.filter(match => {
    const firstPlayer = Users.findOne(match.firstPlayer)
    return firstPlayer.profile.category === currentUser.profile.category
  }).length
}
