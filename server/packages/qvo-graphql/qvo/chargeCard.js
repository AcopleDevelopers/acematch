import {postData} from '../QVOConnection'

export default async function(customerId, amount, description) {
  try {
    return await postData('webpay_plus/charge', {
      customerId,
      amount,
      description: description || '',
      return_url: 'http://localhost:3000/voucher'
    })
  } catch (e) {
    console.log(e)
    return null
  }
}
