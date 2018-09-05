import {getData} from '../QVOConnection'

export default async function({customerId}) {
  try {
    const customer = await getData(`customers/${customerId}`)
    return customer
  } catch (e) {
    console.log('error')
    return null
  }
}
