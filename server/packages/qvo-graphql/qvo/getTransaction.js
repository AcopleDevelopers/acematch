import {getData} from '../QVOConnection'

export default async function(trasactionId) {
  try {
    const data = await getData(`transactions/${trasactionId}`)
    return data
  } catch (e) {
    console.log(e)
    return null
  }
}
