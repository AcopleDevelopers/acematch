import Users from 'api/collections/Users'
/**
 * Check if someone is allowed to add  a new collaborator
 * depending on his role.
 * @author
 */
const superAdmin = function(root, params, context) {
  const user = Users.findOne({_id: context.userId})
  if (!user.roles.includes('superAdmin')) {
    throw new Error('You need superAdmin role')
  }
  return true
}

export default superAdmin
