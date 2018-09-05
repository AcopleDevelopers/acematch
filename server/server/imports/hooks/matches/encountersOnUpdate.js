import Matches from 'api/collections/Matches'
import Encounters from 'api/collections/Encounters'

Matches.after.update(async function(userId, doc) {
  if (
    this.previous.firstPlayer === doc.firstPlayer &&
    this.previous.secondPlayer === doc.secondPlayer
  ) {
    return
  }
  if (
    doc.firstPlayer &&
    doc.firstPlayer !== this.previous.firstPlayer &&
    doc.firstPlayer !== this.previous.secondPlayer
  ) {
    Encounters.insert({
      userId: doc.firstPlayer,
      matchId: doc._id,
      date: new Date()
    })
  }
  if (
    doc.secondPlayer &&
    doc.secondPlayer !== this.previous.firstPlayer &&
    doc.secondPlayer !== this.previous.secondPlayer
  ) {
    Encounters.insert({
      userId: doc.secondPlayer,
      matchId: doc._id,
      date: new Date()
    })
  }
  if (
    this.previous.firstPlayer === doc.firstPlayer &&
    this.previous.secondPlayer &&
    !doc.secondPlayer &&
    !doc.result
  ) {
    const encounter = Encounters.findOne({
      userId: this.previous.secondPlayer,
      matchId: doc._id
    })
    Encounters.remove(encounter._id)
  }
  if (
    this.previous.firstPlayer &&
    this.previous.secondPlayer === doc.firstPlayer &&
    !doc.secondPlayer &&
    !doc.result
  ) {
    const encounter = Encounters.findOne({
      userId: this.previous.firstPlayer,
      matchId: doc._id
    })
    Encounters.remove(encounter._id)
  }
})
