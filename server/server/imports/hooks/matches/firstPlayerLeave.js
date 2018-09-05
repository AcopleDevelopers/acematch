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
    this.previous.firstPlayer !== doc.firstPlayer &&
    this.previous.secondPlayer === doc.firstPlayer
  ) {
    const firstPlayerDevices = Devices.find({
      userId: doc.firstPlayer,
      confirmation: true
    }).fetch()

    const firstUser = Meteor.users.findOne(doc.firstPlayer)
    const club = Clubs.findOne(doc.clubId)
    const playfield = Playfields.findOne(doc.playfieldId)
    const timeblock = Timeblocks.findOne(doc.timeblockId)

    send({
      addresses: [firstUser.emails[0].address],
      subject: `El creador del partido ha abandonado.`,
      data: {firstUser, club, playfield, timeblock},
      template: 'firstPlayerLeave'
    })

    if (firstPlayerDevices) {
      for (const device of firstPlayerDevices) {
        rp({
          uri: 'https://exp.host/--/api/v2/push/send',
          method: 'POST',
          json: true,
          body: {
            to: device.pushToken,
            title: `El creador del partido ha abandonado`,
            body: `Tu contrincante ha abandonado el partido que se jugará en el club ${
              club.name
            }, cancha ${playfield.name} y en el bloque ${
              timeblock.name
            }. Has pasado a ser el anfitrión del partido.`,
            priority: 'high',
            data: {
              title: `Uno de tus contrincantes se ha marchado de un partido`,
              body: `Tu contrincante ha abandonado el partido que se jugará en el club ${
                club.name
              }, cancha ${playfield.name} y en el bloque ${
                timeblock.name
              }. Has pasado a ser el anfitrión del partido.`,
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
