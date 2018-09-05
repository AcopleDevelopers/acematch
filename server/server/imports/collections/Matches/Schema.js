import SimpleSchema from 'simpl-schema'
import information from './information'

export default new SimpleSchema({
  firstPlayer: {
    type: String
  },
  secondPlayer: {
    type: String,
    optional: true
  },
  date: {
    type: Date
  },
  clubId: {
    type: String
  },
  playfieldId: {
    type: String
  },
  timeblockId: {
    type: String
  },
  createdAt: {
    type: Date
  },
  result: {
    type: Array,
    optional: true
  },
  winner: {
    type: String,
    optional: true
  },
  'result.$': {
    type: Object
  },
  'result.$.setNumber': {
    type: String
  },
  'result.$.firstPlayer': {
    type: String
  },
  'result.$.secondPlayer': {
    type: String
  },
  information: {
    type: information,
    optional: true
  }
})
