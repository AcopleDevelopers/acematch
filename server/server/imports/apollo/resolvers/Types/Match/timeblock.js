import Timeblocks from 'api/collections/Timeblocks'

export default function(match, params, context) {
  return Timeblocks.findOne({_id: match.timeblockId})
}
