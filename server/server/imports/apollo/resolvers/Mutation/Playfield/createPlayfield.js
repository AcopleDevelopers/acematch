import Playfields from 'api/collections/Playfields'

export default function(root, {name, clubId, description}, context) {
  const playfield = Playfields.insert({
    name,
    clubId,
    description,
    createdAt: new Date()
  })
  return Playfields.findOne(playfield)
}
