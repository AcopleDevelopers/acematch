import Users from 'api/collections/Users'
import resolver from 'paginated-graphql/lib/resolver'

export default resolver({
  collection: Users, // Meteor collection
  allowedSort: ['name', 'createdAt'], // fields that can be sorted
  fields: [
    'emails.address',
    'profile.firstName',
    'profile.lastName',
    'profile.genre',
    'profile.ranking',
    'profile.category',
    'expertiseLevel'
  ], // fields that can be searched
  transformQuery(query, root, params, context) {
    query.roles = {$exists: false}
    return query
  }
})
