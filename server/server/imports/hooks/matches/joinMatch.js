import Devices from 'api/collections/Devices'
import Clubs from 'api/collections/Clubs'
import Playfields from 'api/collections/Playfields'
import Timeblocks from 'api/collections/Timeblocks'
import Matches from 'api/collections/Matches'
import send from 'api/emails/send'
import {Meteor} from 'meteor/meteor'
import rp from 'request-promise'

Matches.after.update(async function(
  userId,
  doc,
  fieldNames,
  modifier,
  options
) {
  if (
    !this.previous.secondPlayer &&
    doc.secondPlayer &&
    this.previous.firstPlayer &&
    doc.firstPlayer &&
    this.previous.firstPlayer === doc.firstPlayer
  ) {
    const firstPlayerDevices = Devices.find({
      userId: doc.firstPlayer,
      confirmation: true
    }).fetch()

    const firstUser = Meteor.users.findOne(doc.firstPlayer)
    const secondUser = Meteor.users.findOne(doc.secondPlayer)
    const club = Clubs.findOne(doc.clubId)
    const playfield = Playfields.findOne(doc.playfieldId)
    const timeblock = Timeblocks.findOne(doc.timeblockId)

    send({
      addresses: [firstUser.emails[0].address],
      subject: `Alguien se ha unido a uno de tus Match`,
      data: {firstUser, secondUser, club, playfield, timeblock},
      template: 'joinMatch'
    })

    if (firstPlayerDevices) {
      for (const device of firstPlayerDevices) {
        rp({
          uri: 'https://exp.host/--/api/v2/push/send',
          method: 'POST',
          json: true,
          body: {
            to: device.pushToken,
            title: 'Alguien se ha unido a uno de tus Match.',
            body: `Se ha unido un jugador a uno de tus partidos en el club ${
              club.name
            }, cancha ${playfield.name} y en el bloque ${timeblock.name}.`,
            priority: 'high',
            data: {
              title: 'Alguien se ha unido a uno de tus Match.',
              body: `Se ha unido un jugador a uno de tus partidos en el club ${
                club.name
              }, cancha ${playfield.name} y en el bloque ${timeblock.name}.`,
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
