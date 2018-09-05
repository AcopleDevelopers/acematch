import Clubs from 'api/collections/Clubs'
import resolver from 'paginated-graphql/lib/resolver'

export default resolver({
  collection: Clubs, // Meteor collection
  allowedSort: ['createdAt'], // fields that can be sorted
  fields: ['name'], // fields that can be searched
  transformQuery(query, root, params, context) {
    return query
  }
})
