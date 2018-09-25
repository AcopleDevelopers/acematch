import {Picker} from 'meteor/meteorhacks:picker'
import {Meteor} from 'meteor/meteor'
import {getTransaction} from 'meteor/orionsoft:qvo-graphql'
import Users from 'api/collections/Users'

Picker.route(
  '/voucher',
  async function(params, request, response) {
    const { query: { transaction_id } } = params
    try {
      const transaction = await getTransaction(transaction_id)
      console.log('transaction:', trasaction)
      if (status === 'successful') {
        const user = Users.findOne({ customerId: customer.id }, { matchesToPlay: 1 })
        console.log('user', user)
        if (typeof user.matchesToPlay !== 'number') {
          Users.update(
            { customerId: customer.id },
            { $set: { matchesToPlay: 1 } }
          )
        } else {
          Users.update(
            { customerId: customer.id },
            { $inc: { matchesToPlay: 1 } }
          )
        }
        console.log('matchesToPlay:', user.matchesToPlay)
      } else {
        console.log('STATUS:', status)
      }
    } catch(error) {
      console.log('Error setting matches:', error.message)
    }
  },
  { where: 'server'}
)
