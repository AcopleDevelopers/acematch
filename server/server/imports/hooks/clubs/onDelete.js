import Clubs from 'api/collections/Clubs'
import Timeblocks from 'api/collections/Timeblocks'
import Playfields from 'api/collections/Playfields'
import Matches from 'api/collections/Matches'

Clubs.after.remove(async function(userId, doc) {
  const timeblocks = Timeblocks.find({clubId: doc._id}).fetch()
  const playfields = Playfields.find({clubId: doc._id}).fetch()
  const matches = Matches.find({clubId: doc._id}).fetch()
  const date = new Date()

  if (timeblocks) {
    for (const timeblock of timeblocks) {
      Timeblocks.remove(timeblock._id)
    }
  }
  if (playfields) {
    for (const playfield of playfields) {
      Playfields.remove(playfield._id)
    }
  }
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
