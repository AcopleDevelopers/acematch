import Users from 'api/collections/Users'
import resolver from 'paginated-graphql/lib/resolver'

export default resolver({
  collection: Users, // Meteor collection
  allowedSort: ['profile.firstName', 'name', 'createdAt'], // fields that can be sorted
  fields: ['profile.firstName', 'profile.lastName', 'emails.address'], // fields that can be searched
  transformQuery(query, root, params, context) {
    query.roles = {$exists: true}
    query.roles = {$ne: 'superAdmin'}
    query.roles = 'admin'
    return query
  }
})
