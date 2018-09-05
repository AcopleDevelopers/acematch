import SimpleSchema from 'simpl-schema'

export default new SimpleSchema({
  name: {
    type: String
  },
  createdAt: {
    type: Date
  },
  picture: {
    type: Object,
    blackbox: true,
    optional: true
  }
})
