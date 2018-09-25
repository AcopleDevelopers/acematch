import SimpleSchema from 'simpl-schema'
import Profile from './Profile'

export default new SimpleSchema({
  emails: {
    type: Array
  },
  'emails.$': {
    type: Object
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  'emails.$.verified': {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  profile: {
    type: Profile
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  roles: {
    type: Array,
    optional: true
  },
  'roles.$': {
    type: String,
    optional: true
  },
  heartbeat: {
    type: Date,
    optional: true
  },
  customerId: {
    type: String,
    optional: true
  },
  subscriptionId: {
    type: String,
    optional: true
  },
  userCards: {
    type: Array,
    optional: true
  },
  'userCards.$': {
    type: String,
    optional: true
  },
  expertiseLevel: {
    type: String,
    defaultValue: 'A',
    optional: true
  },
  playedGames: {
    type: Number,
    defaultValue: 0,
    optional: true
  },
  lostMatches: {
    type: Number,
    defaultValue: 0,
    optional: true
  },
  wonMatches: {
    type: Number,
    defaultValue: 0,
    optional: true
  },
  matchesToPlay: {
    type: Number,
    optional: true,
    defaultValue: 0
  },
  enabled: {
    type: Boolean,
    optional: true
  }
})
