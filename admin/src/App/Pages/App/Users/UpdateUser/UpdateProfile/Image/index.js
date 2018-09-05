import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

export default class Image extends React.Component {
  static propTypes = {
    picture: PropTypes.string
  }

  noImage() {
    return (
      <div className={styles.noImage}>
        <div className={styles.text}>Sin imagen</div>
      </div>
    )
  }

  render() {
    const {picture} = this.props
    if (!picture) return this.noImage()
    return (
      <div className={styles.logoUp}>
        <img src={picture.url} alt="clubLogo" />
      </div>
    )
  }
}
