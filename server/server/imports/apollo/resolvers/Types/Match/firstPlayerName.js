import Users from 'api/collections/Users'

export default function(match, params, context) {
  if (!match.firstPlayer) return
  const user = Users.findOne(match.firstPlayer)
  return `${user.profile.firstName} ${user.profile.lastName}`
}
