import Devices from 'api/collections/Devices'
import Clubs from 'api/collections/Clubs'
import Playfields from 'api/collections/Playfields'
import Timeblocks from 'api/collections/Timeblocks'
import Matches from 'api/collections/Matches'
import send from 'api/emails/send'
import {Meteor} from 'meteor/meteor'
import sendPushNotification from '../sendPushNotification'

Matches.after.update(async function(userId, doc, fieldNames, modifier, options) {
  if (
    this.previous.secondPlayer &&
    !doc.secondPlayer &&
    this.previous.firstPlayer &&
    doc.firstPlayer &&
    this.previous.firstPlayer === doc.firstPlayer
  ) {
    const firstPlayerDevices = Devices.find({
      userId: doc.firstPlayer,
      confirmation: true
    }).fetch()

    const firstUser = Meteor.users.findOne(doc.firstPlayer)
    const secondUser = Meteor.users.findOne(this.previous.secondPlayer)
    const club = Clubs.findOne(doc.clubId)
    const playfield = Playfields.findOne(doc.playfieldId)
    const timeblock = Timeblocks.findOne(doc.timeblockId)

    const title = `Uno de tus contrincantes se ha marchado de un partido`
    const body = `Tu contrincante ha abandonado el partido que se jugará en el club ${club.name}, cancha ${playfield.name} y en el bloque ${timeblock.name}.`

    send({
      addresses: [firstUser.emails[0].address],
      subject: title,
      data: {firstUser, secondUser, club, playfield, timeblock},
      template: 'secondPlayerLeave'
    })

    if (firstPlayerDevices) {
      sendPushNotification(firstPlayerDevices, title, body)
    }
  }
})
