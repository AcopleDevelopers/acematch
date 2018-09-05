import {deleteCard} from 'meteor/orionsoft:qvo-graphql'
import Users from 'api/collections/Users'

export default async function(root, {userId, cardId}, context) {
  const user = Users.findOne(userId)
  await deleteCard(user.customerId, cardId)
  return {success: true}
}
