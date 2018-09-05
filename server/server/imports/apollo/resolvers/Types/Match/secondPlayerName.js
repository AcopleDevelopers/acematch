import Users from 'api/collections/Users'

export default function(match, params, context) {
  if (!match.secondPlayer) return
  const user = Users.findOne(match.secondPlayer)
  return `${user.profile.firstName} ${user.profile.lastName}`
}
