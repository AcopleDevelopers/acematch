import React from 'react'
import PropTypes from 'prop-types'
import {View, ScrollView} from 'react-native'
import ViewWithBackground from 'App/components/ViewWithBackground'
import Button from 'App/components/Button'
import Title from 'App/components/texts/Title'
import Subtitle from 'App/components/texts/Subtitle'
import WhiteText from 'App/components/texts/WhiteText'

import styles from './styles'

export default class Info extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    texts: PropTypes.arrayOf(
      PropTypes.shape({
        subtitle: PropTypes.boolean,
        content: PropTypes.node.isRequired,
        style: PropTypes.any
      })
    ),
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired,
        style: PropTypes.any,
        textStyle: PropTypes.any
      })
    )
  }

  renderText(text, index) {
    const Component = text.subtitle ? Subtitle : WhiteText
    return (
      <Component
        key={index}
        style={[styles.text, !text.subtitle && styles.smallText, text.style]}
      >
        {text.content}
      </Component>
    )
  }

  renderButton({text, onPress, style, textStyle}, index) {
    return (
      <Button
        key={index}
        title={text}
        onPress={onPress}
        style={style}
        titleStyle={textStyle}
      />
    )
  }

  render() {
    const {title, texts, buttons} = this.props
    return (
      <ViewWithBackground background={require('./background.png')}>
        <ScrollView style={styles.textContainer}>
          {title ? <Title style={styles.title}>{title}</Title> : null}
          {texts.map((text, index) => this.renderText(text, index))}
        </ScrollView>
        <View style={styles.buttonsContainer}>
          {buttons.map((button, index) => this.renderButton(button, index))}
        </View>
      </ViewWithBackground>
    )
  }
}
