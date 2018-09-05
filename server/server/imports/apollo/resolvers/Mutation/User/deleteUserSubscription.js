import {cancelSubscription} from 'meteor/orionsoft:qvo-graphql'
import Users from 'api/collections/Users'

export default async function(root, {userId, subscriptionId}, context) {
  await cancelSubscription(subscriptionId)
  Users.update(userId, {$set: {subscriptionId: null}})
  return {success: true}
}
