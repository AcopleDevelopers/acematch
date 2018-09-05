import Playfields from 'api/collections/Playfields'
import Matches from 'api/collections/Matches'
import cloneDeep from 'lodash/cloneDeep'

Playfields.after.update(async function(userId, doc) {
  if (this.previous.name !== doc.name) {
    const matches = Matches.find({playfieldId: doc._id}).fetch()
    let information
    for (const match of matches) {
      information = cloneDeep(match.information)
      information['playfieldName'] = doc.name
      Matches.update(match._id, {$set: {information: information}})
    }
  }
})
