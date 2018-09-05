import Devices from 'api/collections/Devices'

export default async function(root, {pushToken}, context) {
  if (!pushToken) return
  const device = Devices.findOne({userId: context.userId, pushToken: pushToken})
  if (device) return
  Devices.insert({
    userId: context.userId,
    pushToken: pushToken,
    confirmation: true
  })
  return {success: true}
}
