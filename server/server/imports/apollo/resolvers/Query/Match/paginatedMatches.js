import Matches from 'api/collections/Matches'
import resolver from 'paginated-graphql/lib/resolver'

export default resolver({
  collection: Matches, // Meteor collection
  allowedSort: ['date'], // fields that can be sorted
  fields: [
    'information.firstPlayerName',
    'information.secondPlayerName',
    'information.clubName',
    'information.playfieldName',
    'information.timeblockName'
  ], // fields that can be searched
  transformQuery(query, root, params, context) {
    return query
  }
})
