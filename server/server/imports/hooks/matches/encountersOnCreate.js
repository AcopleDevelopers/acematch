import Matches from 'api/collections/Matches'
import Encounters from 'api/collections/Encounters'

Matches.after.insert(async function(userId, doc) {
  if (doc.firstPlayer) {
    Encounters.insert({
      userId: doc.firstPlayer,
      matchId: doc._id,
      date: new Date()
    })
  }
  if (doc.secondPlayer) {
    Encounters.insert({
      userId: doc.secondPlayer,
      matchId: doc._id,
      date: new Date()
    })
  }
})
