import Timeblocks from 'api/collections/Timeblocks'

export default function(club, params, context) {
  return Timeblocks.find({clubId: club._id}).fetch()
}
