import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import FaFlagCheckered from 'react-icons/lib/fa/flag-checkered'
import FaPencil from 'react-icons/lib/fa/pencil'
import MdDelete from 'react-icons/lib/md/delete'
import {withRouter} from 'react-router'
import Paginated from 'App/components/Paginated'
import Loading from 'orionsoft-parts/lib/components/Loading'
import Container from 'orionsoft-parts/lib/components/Container'
import Tooltip from 'orionsoft-parts/lib/components/Tooltip'
import MdApps from 'react-icons/lib/md/apps'
import moment from 'moment'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import Button from 'orionsoft-parts/lib/components/Button'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import autobind from 'autobind-decorator'
import {withApollo} from 'react-apollo'

@withMutation(gql`
  mutation deleteClub($clubId: ID) {
    deleteClub(clubId: $clubId) {
      success
    }
  }
`)
@withApollo
@withMessage
@withRouter
export default class Home extends React.Component {
  static propTypes = {
    client: PropTypes.object,
    showMessage: PropTypes.func,
    history: PropTypes.object,
    deleteClub: PropTypes.func
  }

  state = {}

  getFields() {
    return [
      {
        title: '',
        name: '_id',
        render: () => <FaFlagCheckered size={20} style={{color: '#2e2e2e'}} />
      },
      {title: 'Nombre', name: 'name'},
      {title: 'Canchas', name: 'playfieldNumber'},
      {title: 'Bloques', name: 'timeblocksNumber'},
      {
        title: 'Inscripción',
        name: 'createdAt',
        render: ({createdAt}) => moment(createdAt).format('MMMM Do YYYY')
      },
      {
        title: '',
        name: '',
        render: item => this.renderElements(item)
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

  renderElements(item) {
    return (
      <div className={styles.elements}>
        <Tooltip content="Ver Canchas y Bloques">
          <MdApps
            style={{color: '#5f7b08'}}
            onClick={() =>
              this.props.history.push(`/clubs/elements/${item._id}`)
            }
          />
        </Tooltip>
      </div>
    )
  }

  @autobind
  async delete(item) {
    const result = window.confirm(
      `Estas eliminando el club: ${
        item.name
      }. Si existen canchas, bloques o matches agendados para este club se eliminarán. ¿Deseas continuar?`
    )
    if (!result) return
    this.setState({loading: true, errorMessages: null})
    try {
      await this.props.deleteClub(
        {clubId: item._id},
        {refetchQueries: ['paginatedClubs']}
      )
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
        <Tooltip content="Eliminar Club">
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
      <div className={styles.edit}>
        <Tooltip content="Editar Club">
          <FaPencil
            onClick={() =>
              this.props.history.push(`/clubs/updateclub/${item._id}`)
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
          <h1>Clubs</h1>
          <div className={styles.divider} />
          <Paginated
            loadingComponent={Loading}
            queryName="paginatedClubs"
            fields={this.getFields()}
            params="$filter: String"
          />
          <div className={styles.button}>
            <Button
              primary
              onClick={() => this.props.history.push('/clubs/createclub')}>
              Crear Club
            </Button>
          </div>
        </Container>
      </div>
    )
  }
}
