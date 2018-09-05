import Clubs from 'api/collections/Clubs'

export default function(root, {clubId, name, picture}, context) {
  Clubs.update(clubId, {$set: {name: name, picture: picture}})
  return Clubs.findOne(clubId)
}
