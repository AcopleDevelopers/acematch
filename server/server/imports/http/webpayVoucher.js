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
      if (transaction.status === 'successful') {
        const userId = transaction.description.split('-')[1]
        const user = Users.findOne({ _id: userId }, { matchesToPlay: 1 })
        console.log('user:', user)
        if (typeof user.matchesToPlay !== 'number') {
          Users.update(
            { _id: userId },
            { $set: { matchesToPlay: 1 } }
          )
        } else {
          Users.update(
            { _id: userId },
            { $inc: { matchesToPlay: 1 } }
          )
        }
        user = Users.findOne({ _id: userId })
        response.statusCode = 200
        response.end(JSON.stringify({status:'success', matchesToPlay: user.matchesToPlay}))
      } else {
        console.log('FAILED STATUS:', status)
        response.statusCode = 500
        response.end(JSON.stringify({status: 'failure'}))
      }
    } catch(error) {
      console.log('Error setting matches:', error.message)
    }
  },
  { where: 'server'}
)
