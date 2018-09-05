import getSameDay from './getSameDay'

export default function(requestTime, collectionTime) {
  const actualDate = new Date()
  const tomorrow = new Date(actualDate.getTime() + 1000 * 60 * 60 * 24)
  if (getSameDay(requestTime, collectionTime)) return false
  if (collectionTime.getTime() - requestTime.getTime() < 0) return false
  if (requestTime.getHours() > 18 && getSameDay(tomorrow, requestTime)) {
    return false
  }
  return true
}
