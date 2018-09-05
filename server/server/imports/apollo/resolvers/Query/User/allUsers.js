import Users from 'api/collections/Users'

export default function(root, params, context) {
  return Users.find({roles: {$exists: false}}).fetch()
}
