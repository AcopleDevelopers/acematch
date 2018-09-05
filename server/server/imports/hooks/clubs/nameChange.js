import Clubs from 'api/collections/Clubs'
import Matches from 'api/collections/Matches'
import cloneDeep from 'lodash/cloneDeep'

Clubs.after.update(async function(userId, doc) {
  if (this.previous.name !== doc.name) {
    const matches = Matches.find({clubId: doc._id}).fetch()
    let information
    for (const match of matches) {
      information = cloneDeep(match.information)
      information['clubName'] = doc.name
      Matches.update(match._id, {$set: {information: information}})
    }
  }
})
