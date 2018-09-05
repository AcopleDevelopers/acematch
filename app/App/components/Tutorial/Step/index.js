import React from 'react'
import {View} from 'react-native'
import Title from 'App/components/texts/Title'
import Info from './Info'
import styles from './styles'
import PropTypes from 'prop-types'

export default class Step extends React.Component {
  static propTypes = {
    titleText: PropTypes.string,
    infos: PropTypes.array
  }

  render() {
    const {titleText, infos} = this.props
    return (
      <View style={styles.container}>
        <Title style={styles.title}>{titleText}</Title>
        <View style={styles.infos}>
          {infos.map((info, index) => <Info key={index} icon={info.icon} text={info.text} />)}
        </View>
      </View>
    )
  }
}
