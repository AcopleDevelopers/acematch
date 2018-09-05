import Users from 'api/collections/Users'
import getSameMonth from 'api/helpers/getSameMonth'

export default function(root, params, context) {
  const users = Users.find().fetch()
  let newUsers = []
  for (const user of users) {
    if (getSameMonth(user.createdAt) && !user.roles) {
      newUsers.push(user)
    }
  }
  return newUsers
}
