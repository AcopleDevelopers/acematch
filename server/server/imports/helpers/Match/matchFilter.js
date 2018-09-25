import Matches from 'api/collections/Matches'

export default function(subscription, user) {
  if (!subscription || subscription.status !== 'active') {
    throw new Error('El usuario no posee un plan')
  }
  const date = new Date()
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  const matches = Matches.find({
    $and: [
      {createdAt: {$gte: firstDay}},
      {createdAt: {$lte: lastDay}},
      {$or: [{firstPlayer: user._id}, {secondPlayer: user._id}]}
    ]
  }).fetch()

  const extraMatches = user.matchesToPlay || 0

  if (matches && matches.length < 2 + extraMatches) {
    return true
  }
  return false
}
