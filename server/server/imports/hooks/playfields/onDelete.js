import Playfields from 'api/collections/Playfields'
import Matches from 'api/collections/Matches'

Playfields.after.remove(async function(userId, doc) {
  const matches = Matches.find({playfieldId: doc._id}).fetch()
  const date = new Date()
  if (matches) {
    for (const match of matches) {
      if (
        match.getTime() >= date.getTime() &&
        match.getHours() >= date.getHours()
      ) {
        Matches.remove(match._id)
      }
    }
  }
})
