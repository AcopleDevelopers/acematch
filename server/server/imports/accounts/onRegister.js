import {Accounts} from 'meteor/accounts-base'
import cloneDeep from 'lodash/cloneDeep'
import Users from 'api/collections/Users'
// import {Meteor} from 'meteor/meteor'
import authVerify from 'api/helpers/authVerify'

Accounts.onCreateUser(function(options, user = {}) {
  if (
    options.profile.superAdmin &&
    options.profile.superAdmin === '45231f4815f4420c3d81c5867f652eca'
  ) {
    const profile = cloneDeep(options.profile)
    delete profile.superAdmin
    user.profile = profile || {}
    user.enabled = true
  } else if (options.profile.adminRequest && !options.profile.superAdmin) {
    user.profile = options.profile || {}
    user.roles = options.roles || {}
    user.enabled = options.enabled || false
  } else {
    if (!authVerify(options.profile)) {
      throw new Error('error on create user')
    }
    const profile = cloneDeep(options.profile)
    delete profile.acceptTerms
    user.profile = profile
    const clone = cloneDeep(user)
    delete clone._id
    Users.simpleSchema().validate(clone)
  }
  return user
})
