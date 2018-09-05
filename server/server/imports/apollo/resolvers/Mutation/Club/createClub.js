import Clubs from 'api/collections/Clubs'

export default function(root, {name, picture}, context) {
  const club = Clubs.insert({name: name, picture: picture, createdAt: new Date()})
  return Clubs.findOne(club)
}
