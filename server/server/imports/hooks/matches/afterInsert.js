import Matches from 'api/collections/Matches'
import Users from 'api/collections/Users'
import Devices from 'api/collections/Devices'
import sendPushNotification from '../sendPushNotification'

Matches.after.insert(async function(userId, doc) {
  if (doc.firstPlayer) {
    const matchOwner = Users.findOne(doc.firstPlayer)
    const matchCategory = matchOwner.profile.category
    const matchGender = matchOwner.profile.genre
    const allSameCategoryPlayers = Users.find({ $and: [
      { _id: { $ne: doc.firstPlayer } },
      { 'profile.category': matchCategory },
      { 'profile.genre': matchGender }
    ]}).fetch()

    console.log('allSameCategoryPlayers:', allSameCategoryPlayers, '\n')

    const title = `Nuevo match disponible en tu categoría`
    const body = `Alguien ha creado un nuevo match de tu misma categoría`

    allSameCategoryPlayers.forEach(player => {
      const playerDevices = Devices.find({ userId: player._id }).fetch()
      sendPushNotification(playerDevices, title, body)
    })
  }
})
