import {Meteor} from 'meteor/meteor'
import Schema from './Schema'

const Playfields = new Meteor.Collection('playfields')

Playfields.attachSchema(Schema)

global.Playfields = Playfields

export default Playfields
