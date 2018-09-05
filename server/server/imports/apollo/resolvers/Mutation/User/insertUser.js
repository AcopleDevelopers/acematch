import Users from 'api/collections/Users'
import {Accounts} from 'meteor/accounts-base'
import cloneDeep from 'lodash/cloneDeep'

export default function(root, {email, plainPassword, profile}, context) {
  const data = cloneDeep(profile)
  data.birthdate = new Date(profile.birthdate)
  data.height = parseInt(profile.height)
  data.weight = parseInt(profile.weight)

  const user = Accounts.createUser({
    email: email,
    password: plainPassword,
    profile: data
  })

  return Users.findOne(user)
}
