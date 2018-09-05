import {getData} from '../QVOConnection'

export default async function(customerId, cardId) {
  try {
    const card = await getData(`/customers/${customerId}/cards/${cardId}`)
    return card
  } catch (e) {
    console.log('No se encontró la tarjeta')
    return null
  }
}
