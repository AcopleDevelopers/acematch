import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import Button from 'orionsoft-parts/lib/components/Button'
import {withApollo} from 'react-apollo'

@withMutation(gql`
  mutation deleteUserCard($userId: ID, $cardId: ID) {
    deleteUserCard(userId: $userId, cardId: $cardId) {
      success
    }
  }
`)
@withApollo
@withMessage
export default class DeleteCard extends React.Component {
  static propTypes = {
    client: PropTypes.object,
    showMessage: PropTypes.func,
    user: PropTypes.object,
    card: PropTypes.object,
    deleteUserCard: PropTypes.func
  }

  state = {}

  async delete() {
    this.setState({loading: true, errorMessages: null})
    const {user, card} = this.props
    try {
      await this.props.deleteUserCard(
        {userId: user._id, cardId: card.id},
        {refetchQueries: ['users']}
      )
      this.props.showMessage('La tarjeta se ha eliminado satisfactoriamente')
    } catch (error) {
      console.log('Error:', error)
      this.props.showMessage(error.message, {level: 'error'})
    } finally {
      this.props.client.queryManager.resetStore()
    }
    this.setState({loading: false})
  }

  render() {
    const {user} = this.props
    if (user.subscriptionId) return null
    return (
      <div className={styles.container}>
        <Button
          onClick={() => this.delete()}
          className={styles.deleteCard}
          loading={this.state.loading}>
          Eliminar Tarjeta
        </Button>
      </div>
    )
  }
}
