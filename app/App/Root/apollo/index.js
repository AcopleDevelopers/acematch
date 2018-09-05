import {onTokenChange} from 'meteor-apollo-accounts'
import client from './client'
import './accounts'
import Loading from 'App/Views/Loading'

onTokenChange(function() {
  client.resetStore()
})

global.apolloLoadingComponent = Loading

export default client
