import SimpleSchema from 'simpl-schema'

export default new SimpleSchema({
  clubName: {
    type: String,
    optional: true
  },
  playfieldName: {
    type: String,
    optional: true
  },
  timeblockName: {
    type: String,
    optional: true
  },
  firstPlayerName: {
    type: String,
    optional: true
  },
  secondPlayerName: {
    type: String,
    optional: true
  }
})
