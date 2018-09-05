import {deleteData} from '../QVOConnection'

export default async function(subscriptionId) {
  try {
    const subscription = await deleteData(`subscriptions/${subscriptionId}`)
    return subscription
  } catch (e) {
    console.log(e)
    return null
  }
}
