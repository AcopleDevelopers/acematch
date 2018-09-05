import Timeblocks from 'api/collections/Timeblocks'
import Playfields from 'api/collections/Playfields'
import Matches from 'api/collections/Matches'
import getSameDay from 'api/helpers/getSameDay'
import random from 'random-gen'
import Users from 'api/collections/Users'

export default function(root, {playfieldId, startDate, endDate}, context) {
  const playfield = Playfields.findOne(playfieldId)
  const timeblocks = Timeblocks.find({clubId: playfield.clubId}).fetch()
  const today = new Date()
  const users = Users.find().fetch()
  today.setHours(0, 0, 0, 0)
  if (today.getTime() > startDate.getTime()) {
    throw new Error('Debes ingresar una fecha actual')
  }
  if (startDate.getTime() > endDate.getTime()) {
    throw new Error('La fecha de inicio debe ser menor que la fecha de término')
  }
  let firstDate = new Date(startDate)
  let lastDate = new Date(endDate)
  firstDate.setHours(0, 0, 0, 0)
  lastDate.setHours(23, 59, 59, 999)
  const matches = Matches.find({
    playfieldId: playfieldId,
    date: {$gte: firstDate, $lte: lastDate}
  }).fetch()
  let blocksArray = []
  for (
    const dynamicDate = startDate;
    dynamicDate.getTime() <= endDate.getTime();
    dynamicDate.setDate(dynamicDate.getDate() + 1)
  ) {
    const dayBlocks = timeblocks.filter(
      tb => tb.activeDays.includes(dynamicDate.getDay()) && tb.playfieldIds.includes(playfieldId)
    )
    for (const block of dayBlocks) {
      const match =
        matches.find(
          match => getSameDay(dynamicDate, match.date) && block._id === match.timeblockId
        ) || {}

      const playerOne = users.find(user => user._id === match.firstPlayer)
      const playerTwo = users.find(user => user._id === match.secondPlayer)
      const currentUser = Users.findOne(context.userId)
      if (
        !playerOne ||
        (!playerTwo && playerOne.profile.category === currentUser.profile.category)
      ) {
        blocksArray.push({
          _id: random.alphaNum(10),
          date: new Date(dynamicDate),
          name: block.name,
          createdAt: block.createdAt,
          clubId: block.clubId,
          matchId: match._id,
          playfieldId: playfieldId,
          startTime: block.startTime,
          timeblockId: block._id,
          endTime: block.endTime,
          activeDays: block.activeDays,
          firstPlayer: match.firstPlayer
        })
      }
    }
  }
  return blocksArray
}
