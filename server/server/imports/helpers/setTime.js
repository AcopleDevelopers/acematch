import moment from 'moment'

export default function(time) {
  const elements = time.split(':')
  const date = new Date()
  const dateFormat = moment(date).toDate()
  dateFormat.setHours(parseInt(elements[0], 10))
  dateFormat.setMinutes(parseInt(elements[1], 10))
  return dateFormat
}
