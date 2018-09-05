import Users from 'api/collections/Users'
import Matches from 'api/collections/Matches'

Users.after.remove(async function(userId, doc) {
  const query = {$or: [{firstPlayer: doc._id}, {secondPlayer: doc._id}]}
  const matches = Matches.find(query).fetch()

  for (const match of matches) {
    if (match.firstPlayer === doc._id && !match.result) {
      if (match.secondPlayer) {
        Matches.update(match._id, {
          $set: {firstPlayer: match.secondPlayer, secondPlayer: null}
        })
      } else {
        Matches.remove(match._id)
      }
    } else {
      Matches.update(match._id, {$set: {secondPlayer: null}})
    }
  }
})
