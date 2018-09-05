import Users from 'api/collections/Users'

export default function(root, {userId, data}, context) {
  Users.update(userId, {$set: {profile: data}})
  return {success: true}
}
