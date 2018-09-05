import {Meteor} from 'meteor/meteor'
import Schema from './Schema'

const Devices = new Meteor.Collection('devices')

Devices.attachSchema(Schema)

global.Devices = Devices

export default Devices
