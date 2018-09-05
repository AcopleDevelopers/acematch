import SimpleSchema from 'simpl-schema'

export default new SimpleSchema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  createdAt: {
    type: Date
  },
  clubId: {
    type: String
  },
  enabled: {
    type: Boolean,
    optional: true,
    defaultValue: true
  }
})
