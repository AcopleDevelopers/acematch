import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import FaUser from 'react-icons/lib/fa/user'
import FaPencil from 'react-icons/lib/fa/pencil'
import MdDelete from 'react-icons/lib/md/delete'
import {withRouter} from 'react-router'
import Paginated from 'App/components/Paginated'
import Loading from 'orionsoft-parts/lib/components/Loading'
import Container from 'orionsoft-parts/lib/components/Container'
import moment from 'moment'
import Tooltip from 'orionsoft-parts/lib/components/Tooltip'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import {withApollo} from 'react-apollo'
import Button from 'orionsoft-parts/lib/components/Button'

@withMutation(gql`
  mutation deleteAdmin($userId: ID) {
    deleteAdmin(userId: $userId) {
      success
    }
  }
`)
@withApollo
@withMessage
@withRouter
export default class Elements extends React.Component {
  static propTypes = {
    client: PropTypes.object,
    showMessage: PropTypes.func,
    history: PropTypes.object,
    deleteAdmin: PropTypes.func
  }

  getFields() {
    return [
      {
        title: '',
        name: '_id',
        render: () => <FaUser size={20} style={{color: '#2e2e2e'}} />
      },
      {title: 'Nombre', name: 'name'},
      {title: 'Email', name: 'email'},
      {
        title: 'Roles',
        name: 'roles',
        render: ({roles}) => this.renderRoles(roles)
      },
      {
        title: 'Inscripción',
        name: 'createdAt',
        render: ({createdAt}) => moment(createdAt).format('MMMM Do YYYY')
      },
      {
        title: '',
        name: '',
        render: item => this.renderEdit(item)
      },
      {
        title: '',
        name: '',
        render: item => this.renderDelete(item)
      }
    ]
  }

  renderRoles(roles) {
    return roles.map((rol, index) => {
      return (
        <div className={styles.rol} key={index}>
          {rol}
        </div>
      )
    })
  }

  async delete(item) {
    this.setState({loading: true, errorMessages: null})
    const result = window.confirm(
      `Estas eliminando al Administrador ${item.name}. ¿Deseas continuar?`
    )
    if (!result) return
    try {
      await this.props.deleteAdmin({userId: item._id})
      this.props.showMessage('Success')
    } catch (error) {
      console.log('Error:', error)
      this.props.showMessage(error.message, {level: 'error'})
    } finally {
      this.props.client.queryManager.resetStore()
    }
    this.setState({loading: false})
  }

  renderDelete(item) {
    return (
      <div className={styles.delete}>
        <Tooltip content="Eliminar Administrador">
          <MdDelete
            onClick={() => this.delete(item)}
            style={{color: '#ff0000'}}
          />
        </Tooltip>
      </div>
    )
  }

  renderEdit(item) {
    return (
      <div className={styles.delete}>
        <Tooltip content="Editar Administrador">
          <FaPencil
            onClick={() =>
              this.props.history.push(`/admins/updateadmin/${item._id}`)
            }
            style={{color: '#2e2e2e'}}
          />
        </Tooltip>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.container}>
        <Container>
          <h1>Administradores</h1>
          <Paginated
            loadingComponent={Loading}
            queryName="paginatedAdmins"
            fields={this.getFields()}
            params="$filter: String"
          />
          <div className={styles.button}>
            <Button
              primary
              onClick={() => this.props.history.push('/admins/create')}>
              Crear Administrador
            </Button>
          </div>
        </Container>
      </div>
    )
  }
}
