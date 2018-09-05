import React from 'react'
import PropTypes from 'prop-types'
import Button from 'orionsoft-parts/lib/components/Button'
import fieldsValidation from 'App/helpers/createUser/fieldsValidation'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import styles from './styles.css'
import getProfile from 'App/helpers/createUser/getProfile'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import {withRouter} from 'react-router-dom'

@withMutation(gql`
  mutation insertUser($email: String, $plainPassword: String, $profile: JSON) {
    insertUser(
      email: $email
      plainPassword: $plainPassword
      profile: $profile
    ) {
      _id
    }
  }
`)
@withRouter
@withMessage
export default class Save extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    client: PropTypes.object,
    showMessage: PropTypes.func,
    userInformation: PropTypes.object,
    insertUser: PropTypes.func
  }

  state = {}

  async create() {
    this.setState({loading: true, errorMessages: null})
    const {userInformation} = this.props
    const profile = getProfile(userInformation)
    try {
      const {insertUser: {_id: userId}} = await this.props.insertUser({
        email: userInformation.email,
        plainPassword: userInformation.plainPassword,
        profile: profile
      })
      this.props.history.push(`/users/update/${userId}`)
      this.props.showMessage('Usuario creado satisfactoriamente!')
    } catch (error) {
      console.log('Error:', error)
      this.props.showMessage(error.message, {level: 'error'})
    }
    this.setState({loading: false})
  }

  render() {
    const {userInformation} = this.props
    return (
      <div className={styles.container}>
        <div className={styles.button}>
          <Button
            onClick={() => this.create()}
            primary
            loading={this.state.loading}
            disabled={!fieldsValidation(userInformation)}>
            Crear Usuario
          </Button>
          <Button onClick={() => this.props.history.push('/users')}>
            Volver
          </Button>
        </div>
      </div>
    )
  }
}
