import getSameDay from './getSameDay'

export default function(startTime, endTime, moment) {
  if (
    !getSameDay(startTime, endTime) ||
    !getSameDay(startTime, moment) ||
    !getSameDay(moment, endTime)
  ) {
    return false
  }
  return (
    startTime.getHours() <= moment.getHours() &&
    endTime.getHours() >= moment.getHours()
  )
}
