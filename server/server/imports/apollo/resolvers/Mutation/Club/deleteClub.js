import Clubs from 'api/collections/Clubs'

export default function(root, {clubId}, context) {
  Clubs.remove(clubId)
  return {success: true}
}
