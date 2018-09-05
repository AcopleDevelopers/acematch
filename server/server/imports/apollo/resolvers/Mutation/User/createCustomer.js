import Users from 'api/collections/Users'
import {createCustomer} from 'meteor/orionsoft:qvo-graphql'

export default async function(root, params, context) {
  const user = Users.findOne(context.userId)
  const userEmail = user.emails[0].address
  const userName = `${user.profile.firstName} ${user.profile.lastName}`
  const userInscription = await createCustomer(userEmail, userName)
  Users.update(context.userId, {$set: {customerId: userInscription.id}})
  return {success: true}
}
