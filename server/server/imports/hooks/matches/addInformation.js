import Matches from 'api/collections/Matches'
import Users from 'api/collections/Users'
import Clubs from 'api/collections/Clubs'
import Playfields from 'api/collections/Playfields'
import Timeblocks from 'api/collections/Timeblocks'

Matches.after.insert(async function(userId, doc) {
  let firstPlayerName
  let secondPlayerName

  if (doc.firstPlayer) {
    const firstPlayer = Users.findOne(doc.firstPlayer)
    firstPlayerName = `${firstPlayer.profile.firstName} ${
      firstPlayer.profile.lastName
    }`
  }
  if (doc.secondPlayer) {
    const secondPlayer = Users.findOne(doc.secondPlayer)
    secondPlayerName = `${secondPlayer.profile.firstName} ${
      secondPlayer.profile.lastName
    }`
  }
  const clubName = Clubs.findOne(doc.clubId).name
  const playfieldName = Playfields.findOne(doc.playfieldId).name
  const timeblocksName = Timeblocks.findOne(doc.timeblockId).name
  const information = {
    firstPlayerName: firstPlayerName,
    secondPlayerName: secondPlayerName,
    clubName: clubName,
    playfieldName: playfieldName,
    timeblocksName: timeblocksName
  }
  Matches.update(doc._id, {$set: {information: information}})
})
