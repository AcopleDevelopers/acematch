import Users from 'api/collections/Users'

export default function(root, params, context) {
  const user = Users.findOne(context.userId)
  return user
}
