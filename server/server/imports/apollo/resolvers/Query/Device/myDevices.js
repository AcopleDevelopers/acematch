import Devices from 'api/collections/Devices'

export default function(root, params, context) {
  return Devices.find(context.userId).fetch()
}
