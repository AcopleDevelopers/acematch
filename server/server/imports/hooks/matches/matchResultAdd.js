import Devices from 'api/collections/Devices'
import Clubs from 'api/collections/Clubs'
import Playfields from 'api/collections/Playfields'
import Timeblocks from 'api/collections/Timeblocks'
import Matches from 'api/collections/Matches'
import send from 'api/emails/send'
import {Meteor} from 'meteor/meteor'
import rp from 'request-promise'
import isEqual from 'lodash/isEqual'

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

    if (firstUser) {
      send({
        addresses: [firstUser.emails[0].address],
        subject: `Se han actualizado los resultados de un partido.`,
        data: {firstUser, club, playfield, timeblock},
        template: 'resultUpdate'
      })
    }

    if (secondUser) {
      send({
        addresses: [secondUser.emails[0].address],
        subject: `Se han actualizado los resultados de un partido.`,
        data: {secondUser, club, playfield, timeblock},
        template: 'resultUpdate'
      })
    }

    if (firstPlayerDevices) {
      for (const device of firstPlayerDevices) {
        rp({
          uri: 'https://exp.host/--/api/v2/push/send',
          method: 'POST',
          json: true,
          body: {
            to: device.pushToken,
            title: 'Se han actualizado los resultados de un partido.',
            body: `Datos del partido: club ${club.name}, cancha ${
              playfield.name
            } y en el bloque ${timeblock.name}.`,
            priority: 'high',
            data: {
              title: 'Se han actualizado los resultados de un partido.',
              body: `Datos del partido: club ${club.name}, cancha ${
                playfield.name
              } y en el bloque ${timeblock.name}.`,
              priority: 'high',
              ios: {
                sound: true
              }
            }
          }
        })
      }
    }

    if (secondPlayerDevices) {
      for (const device of secondPlayerDevices) {
        rp({
          uri: 'https://exp.host/--/api/v2/push/send',
          method: 'POST',
          json: true,
          body: {
            to: device.pushToken,
            title: 'Se ha cancelado uno de tus Match.',
            body: `Datos del partido: club ${club.name}, cancha ${
              playfield.name
            } y en el bloque ${timeblock.name}.`,
            priority: 'high',
            data: {
              title: 'Se ha cancelado uno de tus Match',
              body: `Datos del partido: club ${club.name}, cancha ${
                playfield.name
              } y en el bloque ${timeblock.name}.`,
              priority: 'high',
              ios: {
                sound: true
              }
            }
          }
        })
      }
    }
  }
})
