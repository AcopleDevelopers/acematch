export default function(props) {
  if (!props) return
  const {data} = props
  const options = data.map(club => {
    return {label: club.name, value: club._id}
  })
  return options
}
