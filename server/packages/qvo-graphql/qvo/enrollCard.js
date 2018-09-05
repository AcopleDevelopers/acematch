import {postData} from '../QVOConnection'

export default async function(customerId, callbackUrl) {
  try {
    const enrollment = await postData(`customers/${customerId}/cards/inscriptions`, {
      return_url: 'http://a28abfaf.ngrok.io/enroll'
    })
    return enrollment
  } catch (e) {
    console.log(e)
    return null
  }
}
