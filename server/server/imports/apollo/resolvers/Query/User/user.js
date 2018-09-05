import Users from 'api/collections/Users'

export default function(root, {userId}) {
  return Users.findOne(userId)
}
