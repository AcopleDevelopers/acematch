import rp from 'request-promise'

export default (playerDevices, title, body) => {
  for (const device of playerDevices) {
    console.log('token:', device.token, '\n')
    rp({
      uri: 'https://exp.host/--/api/v2/push/send',
      method: 'POST',
      json: true,
      body: {
        to: device.token,
        badge: 1,
        title,
        body,
        priority: 'high',
        data: {
          to: device.token,
          badge: 1,
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

