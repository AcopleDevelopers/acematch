import {deleteCard} from 'meteor/orionsoft:qvo-graphql'
import Users from 'api/collections/Users'

export default async function(root, {cardId}, context) {
  const user = Users.findOne(context.userId)
  await deleteCard(user.customerId, cardId)
  return {success: true}
}
