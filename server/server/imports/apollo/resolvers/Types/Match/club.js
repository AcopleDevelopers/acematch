import Clubs from 'api/collections/Clubs'

export default function(match, params, context) {
  return Clubs.findOne({_id: match.clubId})
}
