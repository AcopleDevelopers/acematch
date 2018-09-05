import Playfields from 'api/collections/Playfields'

export default function(root, {clubId}, context) {
  return Playfields.find({clubId: clubId}).fetch()
}
