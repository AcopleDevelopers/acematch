import Devices from 'api/collections/Devices'

export default function(root, {pushToken}, context) {
  if (!pushToken) return
  const device = Devices.findOne({userId: context.userId, pushToken: pushToken})
  Devices.remove(device._id)
  return {success: true}
}
