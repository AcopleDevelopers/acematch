import Users from 'api/collections/Users'
import Matches from 'api/collections/Matches'
import cloneDeep from 'lodash/cloneDeep'

Users.after.update(async function(userId, doc) {
  if (
    this.previous.profile.firstName !== doc.profile.firstName ||
    this.previous.profile.lastName !== doc.profile.lastName
  ) {
    const matchesOne = Matches.find({firstPlayer: doc._id}).fetch()
    const matchesTwo = Matches.find({secondPlayer: doc._id}).fetch()
    if (matchesOne) {
      let informationOne
      for (const match of matchesOne) {
        informationOne = cloneDeep(match.information)
        informationOne['firstPlayerName'] = `${doc.profile.firstName} ${
          doc.profile.lastName
        }`
        Matches.update(match._id, {$set: {information: informationOne}})
      }
    }
    if (matchesTwo) {
      let informationTwo
      for (const match of matchesTwo) {
        informationTwo = cloneDeep(match.information)
        informationTwo['secondPlayerName'] = `${doc.profile.firstName} ${
          doc.profile.lastName
        }`
        Matches.update(match._id, {$set: {information: informationTwo}})
      }
    }
  }
})
