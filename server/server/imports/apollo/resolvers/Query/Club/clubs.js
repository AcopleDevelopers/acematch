import Clubs from 'api/collections/Clubs'

export default function(root, params, context) {
  return Clubs.find().fetch()
}
