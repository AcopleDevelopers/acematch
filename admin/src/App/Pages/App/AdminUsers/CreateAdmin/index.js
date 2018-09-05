import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import Container from 'orionsoft-parts/lib/components/Container'
import {Form} from 'simple-react-form'
import FormFields from 'App/components/fields/FormFields'
import {account, profile} from './fields'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import fieldsValidation from 'App/helpers/AdminCrud/CreateAdmin/fieldsValidation'
import cloneDeep from 'lodash/cloneDeep'
import gql from 'graphql-tag'
import Button from 'orionsoft-parts/lib/components/Button'
import {withRouter} from 'react-router-dom'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'

@withMutation(gql`
  mutation createAdmin($data: AdminInput) {
    createAdmin(data: $data) {
      _id
    }
  }
`)
@withRouter
@withMessage
export default class CreateAdmin extends React.Component {
  static propTypes = {
    showMessage: PropTypes.func,
    history: PropTypes.object,
    createAdmin: PropTypes.func
  }
  state = {}

  async save() {
    this.setState({loading: true, errorMessages: null})
    const data = cloneDeep(this.state)
    delete data.loading
    delete data.errorMessages
    try {
      const {createAdmin: {_id: userId}} = await this.props.createAdmin(
        {data: data},
        {refetchQueries: ['paginatedAdmins']}
      )
      this.props.history.push(`/admins/updateadmin/${userId}`)
      this.props.showMessage('Administrador creado con éxito!')
    } catch (error) {
      console.log('Error:', error)
      this.props.showMessage(error.message, {level: 'error'})
    }
    this.setState({loading: false})
  }

  render() {
    return (
      <div className={styles.container}>
        <Container>
          <h1>Crear Administrador</h1>
          <Form state={this.state} onChange={changes => this.setState(changes)}>
            <FormFields fields={account} className="row" />
            <div className={styles.divider} />
            <FormFields fields={profile} className="row" />
          </Form>
          <div className={styles.button}>
            <Button
              primary
              onClick={() => this.save()}
              loading={this.state.loading}
              disabled={!fieldsValidation(this.state)}>
              Crear Administrador
            </Button>
            <Button onClick={() => this.props.history.push('/admins')}>
              Volver
            </Button>
          </div>
        </Container>
      </div>
    )
  }
}
