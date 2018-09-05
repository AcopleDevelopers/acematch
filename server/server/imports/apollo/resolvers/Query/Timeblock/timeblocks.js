import Timeblocks from 'api/collections/Timeblocks'

export default function(root, {clubId}, context) {
  return Timeblocks.find({clubId: clubId}).fetch()
}
