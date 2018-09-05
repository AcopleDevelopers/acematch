import SimpleSchema from 'simpl-schema'

export default new SimpleSchema({
  userId: {
    type: String
  },
  matchId: {
    type: String
  },
  date: {
    type: Date
  }
})
