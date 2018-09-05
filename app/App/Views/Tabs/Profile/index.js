import React from 'react'
import PropTypes from 'prop-types'
import {View} from 'react-native'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import {withNavigationFocus} from '@patwoz/react-navigation-is-focused-hoc'
import gql from 'graphql-tag'
import {Ionicons, Entypo, FontAwesome} from '@expo/vector-icons'
import ImageTitle from 'App/components/ImageTitle'
import Loading from 'App/Views/Loading'

import ProfileImage from './ProfileImage'
import ProfileBadge from './ProfileBadge'
import styles from './styles'

@withNavigationFocus
@withGraphQL(
  gql`
    query me {
      me {
        _id
        name
        playedGames
        lostMatches
        wonMatches
        profile {
          picture {
            url
          }
          category
        }
      }
    }
  `,
  {loading: Loading}
)
class Profile extends React.Component {
  static propTypes = {
    me: PropTypes.object,
    isFocused: PropTypes.bool.isRequired,
    refetch: PropTypes.func.isRequired
  }

  /* eslint camelcase: 0 */
  UNSAFE_componentWillReceiveProps(nextProps) {
    const {isFocused} = this.props
    if (!isFocused && nextProps.isFocused) {
      this.props.refetch()
    }
  }

  render() {
    const {me} = this.props
    const {url} = me.profile.picture || {}

    return (
      <View style={styles.container}>
        <ImageTitle background={require('./imgs/titleImage.png')} title={me.name} />
        <ProfileImage image={{uri: url}} />
        <View style={styles.badges}>
          <ProfileBadge
            icon={<Entypo name="medal" size={40} color="white" />}
            image={require('./imgs/category.png')}
            content={me.profile.category}
            label="Mi Nivel"
          />
          <ProfileBadge
            icon={<Ionicons name="ios-tennisball-outline" size={40} color="white" />}
            image={require('./imgs/playedGames.png')}
            content={me.playedGames}
            label="Jugados"
          />
          <ProfileBadge
            icon={<FontAwesome name="thumbs-up" size={40} color="white" />}
            image={require('./imgs/winGames.png')}
            content={me.wonMatches}
            label="Ganados"
          />
          <ProfileBadge
            icon={<FontAwesome name="thumbs-down" size={40} color="white" />}
            image={require('./imgs/lostGames.png')}
            content={me.lostMatches}
            label="Perdidos"
          />
        </View>
      </View>
    )
  }
}

export default Profile
