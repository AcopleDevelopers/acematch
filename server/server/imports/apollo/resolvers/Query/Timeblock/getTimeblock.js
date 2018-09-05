import Timeblocks from 'api/collections/Timeblocks'

export default function(root, {timeblockId}, context) {
  return Timeblocks.findOne(timeblockId)
}
