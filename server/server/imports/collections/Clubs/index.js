import {Meteor} from 'meteor/meteor'
import Schema from './Schema'

const Clubs = new Meteor.Collection('clubs')

Clubs.attachSchema(Schema)

global.Clubs = Clubs

export default Clubs
