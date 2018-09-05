import Timeblocks from 'api/collections/Timeblocks'
import setTime from 'api/helpers/setTime'

export default function(
  root,
  {name, clubId, startTime, endTime, activeDays, playfieldIds},
  context
) {
  if ((!name, !startTime, !endTime, !activeDays, !playfieldIds)) {
    throw new Error('Faltan campos')
  }
  let days = []
  for (const day of activeDays) {
    days.push(day.value)
  }
  const startFinal = setTime(startTime)
  const endFinal = setTime(endTime)

  if (startFinal.getTime() > endFinal.getTime()) {
    throw new Error('error al ingresar los tiempos')
  }

  const timeblock = Timeblocks.insert({
    name: name,
    clubId: clubId,
    createdAt: new Date(),
    startTime: startFinal,
    endTime: endFinal,
    activeDays: days,
    playfieldIds: playfieldIds
  })
  return Timeblocks.findOne(timeblock)
}
