import Users from 'api/collections/Users'

export default function(root, {userId}, context) {
  const user = Users.findOne(userId)
  if (userId === context.userId) {
    throw new Error('No puedes eliminarte a ti mismo como super Usuario')
  }
  if (user.roles && user.roles.includes('super')) {
    throw new Error('No se puede eliminar al superAdmin')
  }
  Users.remove(userId)
  return {success: true}
}
