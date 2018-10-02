import {Picker} from 'meteor/meteorhacks:picker'
import {Meteor} from 'meteor/meteor'
import {getTransaction} from 'meteor/orionsoft:qvo-graphql'
import Users from 'api/collections/Users'
import moment from 'moment'
import matchesToPlayCount from 'api/helpers/Match/matchesToPlayCount'

Picker.route(
  '/voucher',
  async function(params, request, response) {
    const { query: { transaction_id } } = params
    try {
      const transaction = await getTransaction(transaction_id)
      if (transaction.status === 'successful') {
        const userId = transaction.description.split('-')[1]
        const dueDate = moment().add(30, 'days').toDate()
        Users.update(
          { _id: userId },
          { $addToSet: { matchesToPlay: { amount: 1, dueDate } } }
        )
        const user = Users.findOne({ _id: userId })
        response.statusCode = 200
        response.end(JSON.stringify({
          status:'success',
          matchesToPlay: matchesToPlayCount(user)
        }))
      } else {
        response.statusCode = 500
        response.end(JSON.stringify({status: 'failure'}))
      }
    } catch(error) {
      console.log('Error setting matches:', error.message)
    }
  },
  { where: 'server'}
)
