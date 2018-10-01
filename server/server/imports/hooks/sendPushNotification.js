import Expo from 'expo-server-sdk'
let expo = new Expo();

const sendNotificationsBatch = async (chunks) => {
  let tickets = []
  for (let chunk of chunks) {
    try {
      let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
      tickets.push(...ticketChunk);
      // NOTE: If a ticket contains an error code in ticket.details.error, you
      // must handle it appropriately. The error codes are listed in the Expo
      // documentation:
      // https://docs.expo.io/versions/latest/guides/push-notifications#response-format 
    } catch (error) {
      console.error(error);
    }
  }
}

export default (playerDevices, title, body) => {
  let messages = []
  for (const device of playerDevices) {
    if (!Expo.isExpoPushToken(device.pushToken)) {
      console.error(`Push Token ${device.token} is not a valid Expo push token`)
      continue
    }
    messages.push({
      to: device.pushToken,
      sound: 'default',
      title,
      body,
    })

    let chunks = expo.chunkPushNotifications(messages)
    sendNotificationsBatch(chunks)
  }
}

