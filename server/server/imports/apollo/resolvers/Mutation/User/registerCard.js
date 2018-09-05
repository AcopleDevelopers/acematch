import Users from 'api/collections/Users'
import {enrollCard} from 'meteor/orionsoft:qvo-graphql'
import cloneDeep from 'lodash/cloneDeep'

export default async function(root, params, context) {
  const user = Users.findOne(context.userId)
  if (!user.customerId) {
    throw new Error('error (no se ha inscrito como cliente qvo)')
  }
  let cards = cloneDeep(user.userCards) || []
  const cardInscription = await enrollCard(user.customerId, 'url-back')
  cards.push(cardInscription.inscription_uid)
  Users.update(context.userId, {$set: {userCards: cards}})
  return cardInscription.redirect_url
}
