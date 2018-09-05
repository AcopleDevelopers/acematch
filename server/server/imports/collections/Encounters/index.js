import {Meteor} from 'meteor/meteor'
import Schema from './Schema'

const Encounters = new Meteor.Collection('encounters')

Encounters.attachSchema(Schema)

global.Encounters = Encounters

export default Encounters
