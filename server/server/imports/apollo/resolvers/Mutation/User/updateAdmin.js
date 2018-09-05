import Users from 'api/collections/Users'
import emailValidation from 'api/helpers/emailValidation'
import toLower from 'lodash/toLower'

export default function(root, {userId, data}, context) {
  const email = toLower(data.email)
  const user = Users.findOne(userId)
  const profile = {
    firstName: data.firstName,
    lastName: data.lastName,
    birthdate: data.birthdate,
    genre: data.genre
  }
  if (user.emails[0].address === email) {
    Users.update(userId, {
      $set: {
        roles: [`${data.roles}`],
        enabled: data.enabled,
        profile: profile
      }
    })
  } else {
    const exist = Users.findOne({emails: {$elemMatch: {address: email}}})
    if (exist) {
      throw new Error('Ya existe un usuario con ese Email.')
    }
    if (!emailValidation(email)) {
      throw new Error('El email ingresado es inválido')
    }
    const emails = [{email: email, verified: false}]
    Users.update(userId, {
      $set: {
        roles: [`${data.roles}`],
        enabled: data.enabled,
        emails: emails,
        profile: profile
      }
    })
  }
  return {success: true}
}
