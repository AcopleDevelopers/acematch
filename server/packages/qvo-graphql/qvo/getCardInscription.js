import {getData} from '../QVOConnection'

export default async function(customerId, inscriptionId) {
  try {
    const cardInscription = await getData(
      `/customers/${customerId}/cards/inscriptions/${inscriptionId}`
    )
    return cardInscription
  } catch (e) {
    console.log('No se encontró la inscripción de la tarjeta')
    return null
  }
}
