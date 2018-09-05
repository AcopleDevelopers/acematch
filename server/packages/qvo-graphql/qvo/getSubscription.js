import {getData} from '../QVOConnection'

export default async function(subscriptionId) {
  try {
    const subscription = await getData(`subscriptions/${subscriptionId}`)
    return subscription
  } catch (e) {
    console.log(e)
    return null
  }
}
