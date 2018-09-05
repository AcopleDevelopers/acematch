import Users from 'api/collections/Users'
import {createSubscription} from 'meteor/orionsoft:qvo-graphql'

export default async function(root, {planId}, context) {
  const user = Users.findOne(context.userId)
  if (!user.customerId) {
    throw new Error('error (no customer id)')
  }
  const subscription = await createSubscription(user.customerId, planId)
  Users.update(context.userId, {$set: {subscriptionId: subscription.id}})
  return subscription
}
