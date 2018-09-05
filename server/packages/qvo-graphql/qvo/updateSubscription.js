import {putData} from '../QVOConnection'

export default async function(subscriptionId, planId) {
  try {
    const subscription = await putData(`subscriptions/${subscriptionId}`, {
      plan_id: planId
    })
    return subscription
  } catch (e) {
    console.log(e)
    return null
  }
}
