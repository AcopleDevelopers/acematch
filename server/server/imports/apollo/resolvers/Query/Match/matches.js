import Matches from 'api/collections/Matches'

export default function(root, params, context) {
  return Matches.find().fetch()
}
