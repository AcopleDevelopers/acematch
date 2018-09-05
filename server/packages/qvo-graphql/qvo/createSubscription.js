import {postData} from '../QVOConnection'

export default async function(customerId, planId) {
  try {
    const subscription = await postData('subscriptions', {
      customer_id: customerId,
      plan_id: planId
    })
    return subscription
  } catch (e) {
    console.log(e)
    return null
  }
}
