import {getData} from '../QVOConnection'

export default async function({email, name}) {
  try {
    const plans = await getData('/plans')
    return plans
  } catch (e) {
    console.log('error')
    return null
  }
}
