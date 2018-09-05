import Users from 'api/collections/Users'

export default function(root, {userId}, context) {
  Users.remove(userId)
  return {success: true}
}
