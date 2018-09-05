import Matches from 'api/collections/Matches'
import Encounters from 'api/collections/Encounters'

Matches.after.remove(async function(userId, doc) {
  const encounters = Encounters.find({matchId: doc._id}).fetch()
  for (const encounter of encounters) {
    Encounters.remove(encounter._id)
  }
})
