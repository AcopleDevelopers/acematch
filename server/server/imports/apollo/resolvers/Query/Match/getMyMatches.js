import Matches from 'api/collections/Matches'

export default function(root, params, context) {
  return Matches.find({
    $or: [
      {firstPlayer: context.userId, date: {$gt: new Date()}},
      {secondPlayer: context.userId, date: {$gt: new Date()}}
    ]
  })
}
