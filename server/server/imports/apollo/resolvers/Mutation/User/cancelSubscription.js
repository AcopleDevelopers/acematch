import Users from 'api/collections/Users'
import {cancelSubscription} from 'meteor/orionsoft:qvo-graphql'

export default async function(root, params, context) {
  const user = Users.findOne(context.userId)
  await cancelSubscription(user.subscriptionId)
  return {success: true}
}
