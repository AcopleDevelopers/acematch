import Matches from 'api/collections/Matches'
import Timeblocks from 'api/collections/Timeblocks'
import betweenHour from 'api/helpers/betweenHour'

export default function(root, params, context) {
  const timeblocks = Timeblocks.find().fetch()
  const matches = Matches.find().fetch()
  if (!timeblocks || !matches) return []
  const actualDate = new Date()
  let momentMatches = []
  for (const match of matches) {
    const timeblock = timeblocks.find(block => {
      return block._id === match.timeblockId
    })
    if (timeblock && betweenHour(timeblock.startTime, timeblock.endTime, actualDate)) {
      momentMatches.push(match)
    }
  }
  return momentMatches
}
