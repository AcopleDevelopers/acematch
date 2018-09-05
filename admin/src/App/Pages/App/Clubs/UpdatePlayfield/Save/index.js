import React from 'react'
import PropTypes from 'prop-types'
import Button from 'orionsoft-parts/lib/components/Button'
import styles from './styles.css'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import {withRouter} from 'react-router-dom'

@withMutation(gql`
  mutation updatePlayfield(
    $playfieldId: ID
    $name: String
    $description: String
  ) {
    updatePlayfield(
      playfieldId: $playfieldId
      name: $name
      description: $description
    ) {
      _id
      name
      description
      clubId
    }
  }
`)
@withMessage
@withRouter
export default class Save extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    showMessage: PropTypes.func,
    data: PropTypes.object,
    updatePlayfield: PropTypes.func
  }

  state = {}

  async save() {
    this.setState({loading: true, errorMessages: null})
    const {playfieldId, name, description, clubId} = this.props.data
    try {
      await this.props.updatePlayfield({playfieldId, name, description})
      this.props.history.push(`/clubs/elements/${clubId}`)
      this.props.showMessage('Success')
    } catch (error) {
      console.log('Error:', error)
      this.props.showMessage(error.message, {level: 'error'})
    }
    this.setState({loading: false})
  }

  render() {
    const {clubId} = this.props.data
    return (
      <div className={styles.container}>
        <Button
          primary
          onClick={() => this.save()}
          loading={this.state.loading}>
          Actualizar
        </Button>
        <Button
          onClick={() => this.props.history.push(`/clubs/elements/${clubId}`)}>
          Volver
        </Button>
      </div>
    )
  }
}
