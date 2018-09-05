import Timeblocks from 'api/collections/Timeblocks'
import setTime from 'api/helpers/setTime'

export default function(
  root,
  {timeblockId, name, startTime, endTime, activeDays, playfieldIds},
  context
) {
  let days = []
  for (const day of activeDays) {
    days.push(day.value)
  }
  const startFinal = setTime(startTime)
  const endFinal = setTime(endTime)
  if (startFinal.getTime() > endFinal.getTime()) {
    throw new Error('error al ingresar los tiempos')
  }
  Timeblocks.update(timeblockId, {
    $set: {
      name: name,
      startTime: startFinal,
      endTime: endFinal,
      activeDays: days,
      playfieldIds: playfieldIds
    }
  })
  return Timeblocks.findOne(timeblockId)
}
