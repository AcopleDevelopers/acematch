import Playfields from 'api/collections/Playfields'

export default function(root, {playfieldId}, context) {
  const playfield = Playfields.findOne(playfieldId)
  const active = playfield.enabled || false
  Playfields.update(playfieldId, {$set: {enabled: !active}})
  return {success: true}
}
