import rp from 'request-promise'

export default (playerDevices, title, body) => {
  for (const device of playerDevices) {
    const token = `ExponentPushToken[${device.pushToken}]`
    console.log('token:', token, '\n')
    rp({
      uri: 'https://exp.host/--/api/v2/push/send',
      method: 'POST',
      json: true,
      body: {
        to: token,
        title,
        body,
        priority: 'high',
        data: {
          to: token,
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

