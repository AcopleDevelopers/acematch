import SimpleSchema from 'simpl-schema'

export default new SimpleSchema({
  name: {
    type: String
  },
  createdAt: {
    type: Date
  },
  state: {
    type: Boolean,
    defaultValue: false
  },
  startTime: {
    type: Date
  },
  endTime: {
    type: Date
  },
  activeDays: {
    type: Array
  },
  'activeDays.$': {
    type: Number
  },
  clubId: {
    type: String
  },
  playfieldIds: {
    type: Array
  },
  'playfieldIds.$': {
    type: String
  }
})
