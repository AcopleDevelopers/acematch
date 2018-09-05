import Clubs from 'api/collections/Clubs'

export default function(root, {clubId}, context) {
  return Clubs.findOne(clubId)
}
