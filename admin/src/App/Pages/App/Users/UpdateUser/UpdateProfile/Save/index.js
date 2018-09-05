import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import Button from 'orionsoft-parts/lib/components/Button'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'

@withMutation(gql`
  mutation updateUserProfile($userId: ID, $data: UpdateUserProfile) {
    updateUserProfile(userId: $userId, data: $data) {
      success
    }
  }
`)
@withMessage
export default class Save extends React.Component {
  static propTypes = {
    showMessage: PropTypes.func,
    data: PropTypes.object,
    updateUserProfile: PropTypes.func,
    userId: PropTypes.string
  }

  state = {}

  async save() {
    this.setState({loading: true, errorMessages: null})
    const {userId, data} = this.props
    try {
      await this.props.updateUserProfile(
        {userId, data},
        {
          refetchQueries: ['user']
        }
      )
      this.props.showMessage('El perfil de este jugador ha sido actualizado')
    } catch (error) {
      console.log('Error:', error)
      this.props.showMessage(error.message, {level: 'error'})
    } finally {
    }
    this.setState({loading: false})
  }

  render() {
    return (
      <div className={styles.container}>
        <Button
          primary
          onClick={() => this.save()}
          loading={this.state.loading}>
          Guardar
        </Button>
      </div>
    )
  }
}
