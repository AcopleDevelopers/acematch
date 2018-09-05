export default function(state, props) {
  const {allUsers} = props
  const {firstPlayer} = state
  let options = []
  for (const user of allUsers) {
    if (firstPlayer !== user._id && !user.roles) {
      options.push({label: user.email, value: user._id})
    }
  }
  return options
}
