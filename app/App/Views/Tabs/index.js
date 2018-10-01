import React from 'react'
import {Text, Image, View, AsyncStorage} from 'react-native'
import {TabNavigator} from 'react-navigation'
import {updateFocus} from '@patwoz/react-navigation-is-focused-hoc'
import Tutorial from 'App/components/Tutorial'
import FindMatch from './FindMatch'
import MatchesSchedule from './MatchesSchedule'
import Profile from './Profile'
import Settings from './Settings'
import {Notifications} from 'expo'
import ExtraMatch from './ExtraMatch'

import styles from './styles'

const Tabs = TabNavigator({
  FindMatch: {
    screen: FindMatch,
    navigationOptions: ({navigation}) => ({
      title: 'Buscar match',
      tabBarIcon: ({tintColor}) => (
        <Image style={[styles.icon, {tintColor}]} source={require('./imgs/findMatch.png')} />
      )
    })
  },
  MatchesSchedule: {
    screen: MatchesSchedule,
    navigationOptions: ({navigation}) => ({
      title: 'Mis matches',
      tabBarIcon: ({tintColor}) => (
        <Image style={[styles.icon, {tintColor}]} source={require('./imgs/myMatches.png')} />
      )
    })
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => ({
      title: 'Estadisticas',
      tabBarIcon: ({tintColor}) => (
        <Image style={[styles.icon, {tintColor}]} source={require('./imgs/profile.png')} />
      )
    })
  },
  ExtraMatch: {
    screen: ExtraMatch,
    navigationOptions: ({navigation}) => ({
      title: 'Match Extra',
      tabBarIcon: ({tintColor}) => (
        <Image style={[styles.icon, {tintColor}]} source={require('./imgs/bell-icon.png')} />
      )
    })
  },
  Settings: {
    screen: Settings,
    navigationOptions: ({navigation}) => ({
      title: <Text>Ajustes</Text>,
      tabBarIcon: ({tintColor}) => (
        <Image style={[styles.icon, {tintColor}]} source={require('./imgs/settings.png')} />
      )
    })
  }
})

export default class TabsComponent extends React.Component {
  static navigationOptions = {
    header: null
  }

  state = {
    tutorial: false
  }

  componentDidMount() {
    this.retrieveTutorialStatus()
    Notifications.setBadgeNumberAsync(0)
  }

  retrieveTutorialStatus = async () => {
    const tutorialShowed = await AsyncStorage.getItem('tutorialShowed')
    if (tutorialShowed !== 'true') {
      this.setState({tutorial: true})
    }
  }

  closeTutorial = async () => {
    await AsyncStorage.setItem('tutorialShowed', 'true')
    this.setState({tutorial: false})
  }

  render() {
    const {tutorial} = this.state
    return (
      <View style={styles.container}>
        <Tutorial visible={tutorial} close={this.closeTutorial} />
        <Tabs
          onNavigationStateChange={(prevState, currentState) => {
            updateFocus(currentState)
          }}
        />
      </View>
    )
  }
}
