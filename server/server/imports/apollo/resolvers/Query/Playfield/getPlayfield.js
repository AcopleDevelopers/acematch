import Playfields from 'api/collections/Playfields'

export default function(root, {playfieldId}, context) {
  return Playfields.findOne(playfieldId)
}
