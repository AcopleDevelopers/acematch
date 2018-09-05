import React from 'react'
import PropTypes from 'prop-types'
import BlueText from 'App/components/texts/BlueText'
import styles from './styles'

export default class TitleItem extends React.Component {
  static propTypes = {
    title: PropTypes.string
  }

  render() {
    return <BlueText style={styles.title}>{this.props.title}</BlueText>
  }
}
