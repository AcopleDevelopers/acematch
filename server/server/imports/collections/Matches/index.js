import {Meteor} from 'meteor/meteor'
import Schema from './Schema'

const Matches = new Meteor.Collection('matches')

Matches.attachSchema(Schema)

global.Matches = Matches

export default Matches
