import SimpleSchema from 'simpl-schema'

export default new SimpleSchema({
  firstName: {
    type: String,
    optional: true
  },
  lastName: {
    type: String,
    optional: true
  },
  birthdate: {
    type: Date,
    optional: true
  },
  genre: {
    type: String,
    optional: true
  },
  weight: {
    type: Number,
    optional: true
  },
  height: {
    type: Number,
    optional: true
  },
  category: {
    type: String,
    optional: true
  },
  picture: {
    type: Object,
    blackbox: true,
    optional: true
  },
  adminRequest: {
    type: Boolean,
    optional: true
  }
})
