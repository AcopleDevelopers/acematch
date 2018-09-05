import Playfields from 'api/collections/Playfields'

export default function(root, {playfieldId, name, description}, context) {
  Playfields.update(playfieldId, {$set: {name, description}})
  return Playfields.findOne(playfieldId)
}
