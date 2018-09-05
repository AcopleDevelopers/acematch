import {postData} from '../QVOConnection'

export default async function(email, name) {
  try {
    const customer = await postData('customers', {
      email: email,
      name: name
    })
    return customer
  } catch (e) {
    console.log(e)
    return null
  }
}
