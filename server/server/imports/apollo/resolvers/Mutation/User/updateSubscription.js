import Users from 'api/collections/Users'
import {updateSubscription} from 'meteor/orionsoft:qvo-graphql'

export default async function(root, {planId}, context) {
  const user = Users.findOne(context.userId)
  const subscription = await updateSubscription(user.subscriptionId, planId)
  return subscription
}
