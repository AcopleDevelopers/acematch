import Playfields from 'api/collections/Playfields'

export default function(match, params, context) {
  return Playfields.findOne({_id: match.playfieldId})
}
