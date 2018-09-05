import {getCardInscription} from 'meteor/orionsoft:qvo-graphql'
import cloneDeep from 'lodash/cloneDeep'

export default async function(user, params, context) {
  const userCards = user.userCards || []
  let cardData
  for (const card of userCards) {
    cardData = await getCardInscription(user.customerId, card)
    if (cardData && cardData.status === 'succeeded' && cardData.card) break
  }
  if (!cardData || !cardData.card) return {status: null}
  let finalData = cloneDeep(cardData)
  finalData.created_at = new Date(cardData.created_at)
  finalData.updated_at = new Date(cardData.updated_at)
  finalData.card.created_at = new Date(finalData.card.created_at)
  return finalData
}
