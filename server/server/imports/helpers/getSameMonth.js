export default function(userDate) {
  const actualDate = new Date()
  return (
    actualDate.getFullYear() === userDate.getFullYear() &&
    actualDate.getMonth() === userDate.getMonth()
  )
}
