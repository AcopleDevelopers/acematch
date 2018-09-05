export default function(state, props) {
  const {allUsers} = props
  const {secondPlayer} = state
  let options = []
  for (const user of allUsers) {
    if (secondPlayer !== user._id && !user.roles) {
      options.push({label: user.email, value: user._id})
    }
  }
  return options
}
