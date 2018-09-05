import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import Button from 'orionsoft-parts/lib/components/Button'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'

@withMutation(gql`
  mutation disablePlayfield($playfieldId: ID) {
    disablePlayfield(playfieldId: $playfieldId) {
      success
    }
  }
`)
@withMessage
export default class Disabled extends React.Component {
  static propTypes = {
    showMessage: PropTypes.func,
    playfieldId: PropTypes.string,
    disablePlayfield: PropTypes.func,
    state: PropTypes.bool
  }

  state = {}

  async change() {
    this.setState({loading: true, errorMessages: null})
    const {playfieldId} = this.props
    try {
      await this.props.disablePlayfield({playfieldId}, {refetchQueries: ['getPlayfield']})
      this.props.showMessage('Success')
    } catch (error) {
      console.log('Error:', error)
      this.props.showMessage(error.message, {level: 'error'})
    }
    this.setState({loading: false})
  }

  renderClassname() {
    const {state} = this.props
    if (!state) return styles.disabled
    return styles.enabled
  }

  render() {
    const {state} = this.props
    return (
      <div className={styles.container}>
        <Button
          className={this.renderClassname()}
          loading={this.state.loading}
          onClick={() => this.change()}>
          {state ? 'Desactivar' : 'Activar'}
        </Button>
      </div>
    )
  }
}
