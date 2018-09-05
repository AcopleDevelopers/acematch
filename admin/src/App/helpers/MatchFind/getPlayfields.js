export default function(state, props) {
  if (!state.clubId) return
  const {clubId} = state
  const {data} = props
  const club =
    data.find(function(element) {
      return element._id === clubId
    }) || []
  const options = club.playfields.map(plafield => {
    return {label: plafield.name, value: plafield._id}
  })
  return options
}
