import {Picker} from 'meteor/meteorhacks:picker'
import {Meteor} from 'meteor/meteor'

Picker.route(
  '/voucher',
  function(params, request, response) {
    console.log('request:', request)
  },
  { where: 'server'}
)
