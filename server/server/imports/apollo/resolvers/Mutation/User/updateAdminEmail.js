import Users from 'api/collections/Users'
import emailValidation from 'api/helpers/emailValidation'
import toLower from 'lodash/toLower'

export default function(root, {oldEmail, newEmail, confirmEmail}, context) {
  const user = Users.findOne(context.userId)
  const actualEmail = toLower(oldEmail)
  if (user.emails[0].address !== actualEmail) {
    throw new Error('El email actual ingresado es inválido.')
  }
  const email = toLower(newEmail)
  const confirm = toLower(confirmEmail)
  if (email !== confirm) {
    throw new Error('Los emails ingresado no tienen relación.')
  }
  if (!emailValidation(email)) {
    throw new Error('El email ingresado es inválido')
  }
  const exist = Users.findOne({emails: {$elemMatch: {address: email}}})
  if (exist) {
    throw new Error('Ya existe un usuario con ese Email.')
  }

  let emails = [{address: email, verified: true}]
  Users.update(context.userId, {$set: {emails: emails}})
  return {success: true}
}
