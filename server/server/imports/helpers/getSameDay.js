export default function(actualDate, matchDate) {
  const firstDate = new Date(actualDate)
  const secondDate = new Date(matchDate)
  return (
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getDate() === secondDate.getDate() &&
    firstDate.getMonth() === secondDate.getMonth()
  )
}
