import {getSubscription} from 'meteor/orionsoft:qvo-graphql'
import cloneDeep from 'lodash/cloneDeep'

export default async function(user, params, context) {
  const subscription = await getSubscription(user.subscriptionId)
  if (!subscription) return
  let finalSubscription = cloneDeep(subscription)
  finalSubscription.start = new Date(subscription.start)
  if (finalSubscription.end) finalSubscription.end = new Date(subscription.end)
  return finalSubscription
}
