import Timeblocks from 'api/collections/Timeblocks'

export default function(root, {timeblockId}, context) {
  Timeblocks.remove(timeblockId)
  return {success: true}
}
