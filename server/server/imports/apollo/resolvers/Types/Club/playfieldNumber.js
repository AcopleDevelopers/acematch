import Playfields from 'api/collections/Playfields'

export default function(club, params, context) {
  return Playfields.find({clubId: club._id}).count()
}
