import Users from 'api/collections/Users'
import {updateSubscription} from 'meteor/orionsoft:qvo-graphql'

export default async function(root, {userId, planId}, context) {
  const user = Users.findOne(userId)
  const subscription = await updateSubscription(user.subscriptionId, planId)
  return subscription
}
