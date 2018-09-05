import {deleteData} from '../QVOConnection'

export default async function(customerId, cardId) {
  try {
    await deleteData(`customers/${customerId}/cards/${cardId}`)
  } catch (e) {
    console.log('error')
    return null
  }
  return {success: true}
}
