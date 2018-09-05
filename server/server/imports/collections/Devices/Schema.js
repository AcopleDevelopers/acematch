import SimpleSchema from 'simpl-schema'

export default new SimpleSchema({
  userId: {
    type: String
  },
  confirmation: {
    type: Boolean,
    optional: true
  },
  pushToken: {
    type: String
  }
})
