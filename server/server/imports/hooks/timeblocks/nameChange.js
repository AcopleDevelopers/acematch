import Timeblocks from 'api/collections/Timeblocks'
import Matches from 'api/collections/Matches'
import cloneDeep from 'lodash/cloneDeep'

Timeblocks.after.update(async function(userId, doc) {
  if (this.previous.name !== doc.name) {
    const matches = Matches.find({timeblockId: doc._id}).fetch()
    let information
    for (const match of matches) {
      information = cloneDeep(match.information)
      information['timeblockName'] = doc.name
      Matches.update(match._id, {$set: {information: information}})
    }
  }
})
