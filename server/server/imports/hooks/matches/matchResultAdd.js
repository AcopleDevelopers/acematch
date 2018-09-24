import Devices from 'api/collections/Devices'
import Clubs from 'api/collections/Clubs'
import Playfields from 'api/collections/Playfields'
import Timeblocks from 'api/collections/Timeblocks'
import Matches from 'api/collections/Matches'
import send from 'api/emails/send'
import {Meteor} from 'meteor/meteor'
import isEqual from 'lodash/isEqual'
import sendPushNotification from '../sendPushNotification'

Matches.after.update(async function(
  userId,
  doc,
  fieldNames,
  modifier,
  options
) {
  if (
    (!this.previous.result && doc.result) ||
    !isEqual(this.previous.result, doc.result)
  ) {
    const firstPlayerDevices = Devices.find({
      userId: doc.firstPlayer,
      confirmation: true
    }).fetch()
    const secondPlayerDevices = Devices.find({
      userId: doc.secondPlayer,
      confirmation: true
    }).fetch()

    const firstUser = Meteor.users.findOne(doc.firstPlayer)
    const secondUser = Meteor.users.findOne(doc.secondPlayer)
    const club = Clubs.findOne(doc.clubId)
    const playfield = Playfields.findOne(doc.playfieldId)
    const timeblock = Timeblocks.findOne(doc.timeblockId)

    const title = 'Se han actualizado los resultados de un partido.'
    const body = `Datos del partido: club ${club.name}, cancha ${playfield.name} y en el bloque ${timeblock.name}.`

    if (firstUser) {
      send({
        addresses: [firstUser.emails[0].address],
        subject: title,
        data: {firstUser, club, playfield, timeblock},
        template: 'resultUpdate'
      })
    }


    if (secondUser) {
      send({
        addresses: [secondUser.emails[0].address],
        subject: title,
        data: {secondUser, club, playfield, timeblock},
        template: 'resultUpdate'
      })
    }

    if (firstPlayerDevices) {
      sendPushNotification(firstPlayerDevices, title, body)
    }

    if (secondPlayerDevices) {
      sendPushNotification(secondPlayerDevices, title, body)
    }
  }
})
