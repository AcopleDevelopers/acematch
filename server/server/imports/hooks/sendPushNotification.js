import rp from 'request-promise'

export default (playerDevices, title, body) => {
  for (const device of playerDevices) {
    rp({
      uri: 'https://exp.host/--/api/v2/push/send',
      method: 'POST',
      json: true,
      body: {
        to: device.pushToken,
        title,
        body,
        priority: 'high',
        data: {
          title,
          body,
          priority: 'high',
          ios: {
            sound: true
          }
        }
      }
    })
  }
}

