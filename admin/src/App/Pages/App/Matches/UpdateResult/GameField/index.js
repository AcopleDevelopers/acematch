import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import FormFields from 'App/components/fields/FormFields'
import {result} from './fields'

export default class GameField extends React.Component {
  static propTypes = {
    index: PropTypes.number
  }

  render() {
    return (
      <div className={styles.container}>
        <FormFields fields={result} className="row" />
      </div>
    )
  }
}
