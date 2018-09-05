import React from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import {Permissions, Notifications} from 'expo'
import {View, Platform} from 'react-native'

import Loading from './Loading'
import Auth from './Auth'
import Subscriptions from './Subscriptions'
import Tabs from './Tabs'

@withGraphQL(
  gql`
    query {
      me {
        _id
        subscription {
          id
          status
        }
      }
    }
  `,
  {
    loading: <Loading />
  }
)
@withMutation(gql`
  mutation registerDevice($pushToken: ID) {
    registerDevice(pushToken: $pushToken) {
      success
    }
  }
`)
@withMutation(gql`
  mutation removeDevice($pushToken: ID) {
    removeDevice(pushToken: $pushToken) {
      success
    }
  }
`)
class Views extends React.Component {
  static propTypes = {
    me: PropTypes.object,
    registerDevice: PropTypes.func,
    removeDevice: PropTypes.func
  }

  state = {
    notification: {}
  }

  /* eslint camelcase: 0 */
  UNSAFE_componentWillReceiveProps(nextProps) {
    const {me} = this.props
    if (!me && nextProps.me) {
      this.registerDevice()
    }
    if (me && !nextProps.me) {
      this.remove()
    }
    if (me && nextProps.me) {
      Notifications.addListener(this.handleNotification)
    }
  }

  handleNotification = notification => {
    this.setState({notification: notification})
    const badgeNumber = Notifications.getBadgeNumberAsync() || 0
    Notifications.setBadgeNumberAsync(badgeNumber + 1)
  }

  async remove() {
    // Delete pushToken when user logout
    const {pushToken} = this.state
    if (!pushToken) return
    try {
      this.props.removeDevice({pushToken})
    } catch (e) {
      console.log(e)
    } finally {
      this.setState({pushToken: null})
    }
  }

  async registerDevice() {
    const {status: existingStatus} = await Permissions.getAsync(Permissions.NOTIFICATIONS)
    let finalStatus = existingStatus

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS)
      finalStatus = status
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return
    }
    // Get the token that uniquely identifies this device in login
    let pushToken = await Notifications.getExpoPushTokenAsync()
    if (pushToken) {
      this.setState({pushToken})
      try {
        this.props.registerDevice({pushToken})
      } catch (e) {
        console.log(e)
      }
    }
  }

  mainComponent() {
    const {me} = this.props

    if (!me) return <Auth />

    const {subscription} = me

    if (!subscription || subscription.status !== 'active') {
      return <Subscriptions />
    }

    return <Tabs />
  }

  render() {
    const mainComponent = this.mainComponent()

    return <View style={{marginTop: Platform.OS === 'ios' ? 0 : 24, flex: 1}}>{mainComponent}</View>
  }
}
export default Views
// Error while running ESLint: cannot read property 'type'
