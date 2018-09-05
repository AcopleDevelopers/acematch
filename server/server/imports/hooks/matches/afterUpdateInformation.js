import Matches from 'api/collections/Matches'
import Users from 'api/collections/Users'
import Clubs from 'api/collections/Clubs'
import Playfields from 'api/collections/Playfields'
import Timeblocks from 'api/collections/Timeblocks'
import cloneDeep from 'lodash/cloneDeep'

Matches.after.update(async function(userId, doc) {
  if (!this.previous.result && doc.result) return
  let change = false
  let parameters = cloneDeep(doc.information)

  let firstPlayerName = parameters.firstPlayerName
  let secondPlayerName = parameters.secondPlayerName
  let firstPlayer = parameters.firstPlayer
  let secondPlayer = parameters.secondPlayer
  let clubName = parameters.clubName
  let playfieldName = parameters.playfieldName
  let timeblocksName = parameters.timeblocksName

  if (this.previous.firstPlayer !== doc.firstPlayer) {
    change = true
    firstPlayer = Users.findOne(doc.firstPlayer)
    firstPlayerName = `${firstPlayer.profile.firstName} ${
      firstPlayer.profile.lastName
    }`
  }
  if (this.previous.secondPlayer !== doc.secondPlayer) {
    change = true
    secondPlayer = Users.findOne(doc.secondPlayer)
    secondPlayerName = `${secondPlayer.profile.firstName} ${
      secondPlayer.profile.lastName
    }`
  }
  if (this.previous.clubId !== doc.clubId) {
    change = true
    clubName = Clubs.findOne(doc.clubId).name
  }
  if (this.previous.playfieldId !== doc.playfieldId) {
    change = true
    playfieldName = Playfields.findOne(doc.playfieldId).name
  }
  if (this.previous.timeblockId !== doc.timeblockId) {
    change = true
    timeblocksName = Timeblocks.findOne(doc.timeblockId).name
  }

  if (change) {
    const information = {
      firstPlayerName: firstPlayerName,
      secondPlayerName: secondPlayerName,
      clubName: clubName,
      playfieldName: playfieldName,
      timeblocksName: timeblocksName
    }
    Matches.update(doc._id, {$set: {information: information}})
  }
})
