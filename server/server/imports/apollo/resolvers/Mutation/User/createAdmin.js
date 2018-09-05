import {Accounts} from 'meteor/accounts-base'
import Users from 'api/collections/Users'

export default function(root, {data}, context) {
  if (data.plainPassword !== data.plainPassword2) {
    throw new Error('las contraseñas no tienen relación.')
  }
  const profile = {
    firstName: data.firstName,
    lastName: data.lastName,
    birthdate: new Date(data.birthdate),
    genre: data.genre,
    adminRequest: true
  }
  const user = Accounts.createUser({
    email: data.email,
    password: data.plainPassword,
    profile: profile,
    roles: [`${data.roles}`],
    enabled: data.enabled
  })

  return Users.findOne(user)
}
