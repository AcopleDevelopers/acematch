import Encounters from 'api/collections/Encounters'
import {getSubscription} from 'meteor/orionsoft:qvo-graphql'
import Users from 'api/collections/Users'

export default async function(userId) {
  // VALIDAR ESTAS FECHAS PARA QUE SEAN PRINCIPIO DE MES Y EL FINAL DE MES
  if (!userId) return
  const date = new Date()
  const startDate = new Date(date.getFullYear(), date.getMonth(), 1)
  const endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0)
  startDate.setHours(0, 0, 0, 0)
  endDate.setHours(23, 59, 59, 999)
  const firstUser = Users.findOne(userId)
  const userSubscription = await getSubscription(firstUser.subscriptionId)
  if (!userSubscription || userSubscription.status !== 'active') {
    throw new Error('El jugador no posee un plan')
  }
  const userEncounters = Encounters.find({
    userId: userId,
    date: {$gte: startDate, $lte: endDate}
  }).fetch()
  if (userSubscription.plan.id === 'basico') {
    if (userEncounters.length === 2) {
      throw new Error(
        'Con un plan básico, el jugador solo puede agendar/jugar 2 partidos'
      )
    }
  }
  if (userSubscription.plan.id === 'corriente') {
    if (userEncounters.length === 4) {
      throw new Error(
        'Con un plan corriente, el jugador solo puede agendar/jugar 4 partidos'
      )
    }
  }
}
