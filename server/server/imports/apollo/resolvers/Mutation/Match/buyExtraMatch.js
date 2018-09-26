import Users from 'api/collections/Users'
import {getSubscription, getCard, chargeCard} from 'meteor/orionsoft:qvo-graphql'

export default async function(root, {}, context) {
  const user = Users.findOne(context.userId)
  const {customerId} = user
  const result = await chargeCard(customerId, 5500, `Match Extra-${context.userId}`)
  return result.redirect_url
}
