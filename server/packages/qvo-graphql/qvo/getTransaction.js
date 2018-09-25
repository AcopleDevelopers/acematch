import {getData} from '../QVOConnection'

export default async function(trasactionId) {
  try {
    return await getData(`transactions/${trasactionId}`)
  } catch (e) {
    console.log(e)
    return null
  }
}
