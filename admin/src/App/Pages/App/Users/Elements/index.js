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
import Tooltip from 'orionsoft-parts/lib/components/Tooltip'
import moment from 'moment'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import {withApollo} from 'react-apollo'
import Button from 'orionsoft-parts/lib/components/Button'

@withMutation(gql`
  mutation deleteUser($userId: ID) {
    deleteUser(userId: $userId) {
      success
    }
  }
`)
@withApollo
@withRouter
@withMessage
export default class Elements extends React.Component {
  static propTypes = {
    client: PropTypes.object,
    showMessage: PropTypes.func,
    history: PropTypes.object,
    deleteUser: PropTypes.func
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
      {title: 'Nivel', name: 'expertiseLevel'},
      {title: 'Sexo', name: 'profile.genre'},
      {title: 'Edad', name: 'age'},
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

  async delete(item) {
    const result = window.confirm(
      `Estas eliminando al usuario ${item.name}. ¿Deseas continuar?`
    )
    if (!result) return
    this.setState({loading: true, errorMessages: null})
    try {
      await this.props.deleteUser({userId: item._id})
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
        <Tooltip content="Eliminar Usuario">
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
        <Tooltip content="Editar Usuario">
          <FaPencil
            onClick={() => this.props.history.push(`users/update/${item._id}`)}
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
          <h1>Usuarios</h1>
          <div className={styles.divider} />
          <Paginated
            loadingComponent={Loading}
            queryName="paginatedUsers"
            fields={this.getFields()}
            params="$filter: String"
          />
          <div className={styles.button}>
            <Button
              primary
              onClick={() => this.props.history.push('/users/createuser')}>
              Crear Usuario
            </Button>
          </div>
        </Container>
      </div>
    )
  }
}
