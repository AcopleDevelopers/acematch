import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import fieldsValidation from 'App/helpers/AdminCrud/UpdateAdmin/fieldsValidation'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import {withRouter} from 'react-router-dom'
import Button from 'orionsoft-parts/lib/components/Button'
import cloneDeep from 'lodash/cloneDeep'

@withMutation(gql`
  mutation updateAdmin($userId: ID, $data: AdminUpdateInput) {
    updateAdmin(userId: $userId, data: $data) {
      success
    }
  }
`)
@withRouter
@withMessage
export default class Save extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    showMessage: PropTypes.func,
    updateAdmin: PropTypes.func,
    data: PropTypes.object,
    userId: PropTypes.object
  }

  state = {}

  async save() {
    this.setState({loading: true, errorMessages: null})
    const data = cloneDeep(this.props.data)
    const {userId} = this.props
    delete data.loading
    delete data.errorMessages
    try {
      await this.props.updateAdmin(
        {userId, data},
        {refetchQueries: ['paginatedAdmins']}
      )
      this.props.history.push('/admins')
      this.props.showMessage('Administrador actualizado con éxito!')
    } catch (error) {
      console.log('Error:', error)
      this.props.showMessage(error.message, {level: 'error'})
    }
    this.setState({loading: false})
  }

  render() {
    const {data} = this.props
    return (
      <div className={styles.container}>
        <Button
          primary
          disabled={!fieldsValidation(data)}
          onClick={() => this.save()}>
          Actualizar
        </Button>
        <Button onClick={() => this.props.history.push('/admins')}>
          Volver
        </Button>
      </div>
    )
  }
}
