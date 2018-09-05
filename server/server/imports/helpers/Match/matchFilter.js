import Matches from 'api/collections/Matches'

export default function(subscription, userId) {
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
      {$or: [{firstPlayer: userId}, {secondPlayer: userId}]}
    ]
  }).fetch()
  if (subscription.plan.id === 'basico' && matches && matches.length < 2) {
    return true
  }
  if (subscription.plan.id === 'corriente' && matches && matches.length < 4) {
    return true
  }
  return false
}
