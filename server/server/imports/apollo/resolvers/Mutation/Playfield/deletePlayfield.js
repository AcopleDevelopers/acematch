import Playfields from 'api/collections/Playfields'

export default function(root, {playfieldId}, context) {
  Playfields.remove(playfieldId)
  return {success: true}
}
