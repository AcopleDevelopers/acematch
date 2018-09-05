import Users from 'api/collections/Users'
import resolver from 'paginated-graphql/lib/resolver'

export default resolver({
  collection: Users, // Meteor collection
  allowedSort: ['profile.name', 'createdAt'], // fields that can be sorted
  fields: ['name', 'emails.address', 'profile.name'], // fields that can be searched
  transformQuery(query, root, params, context) {
    return query
  }
})
