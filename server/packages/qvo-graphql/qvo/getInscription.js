import {getData} from '../QVOConnection'

export default async function({customerId, subscriptionUid}) {
  try {
    const inscription = await getData(
      `customers/${customerId}/cards/inscriptions/${subscriptionUid}`
    )
    return inscription
  } catch (e) {
    console.log('error')
    return null
  }
}
