import {Meteor} from 'meteor/meteor'
import Schema from './Schema'

const Timeblocks = new Meteor.Collection('timeblocks')

Timeblocks.attachSchema(Schema)

global.Timeblocks = Timeblocks

export default Timeblocks
