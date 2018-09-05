import {cancelSubscription} from 'meteor/orionsoft:qvo-graphql'
import Users from 'api/collections/Users'

export default async function(root, {subscriptionId}, context) {
  await cancelSubscription(subscriptionId)
  Users.update(context.userId, {$set: {subscriptionId: null}})
  return {success: true}
}
