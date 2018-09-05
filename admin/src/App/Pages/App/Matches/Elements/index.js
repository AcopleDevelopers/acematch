import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import MdGamepad from 'react-icons/lib/md/gamepad'
import FaPencil from 'react-icons/lib/fa/pencil'
import MdDelete from 'react-icons/lib/md/delete'
import {withRouter} from 'react-router'
import Paginated from 'App/components/Paginated'
import Loading from 'orionsoft-parts/lib/components/Loading'
import Container from 'orionsoft-parts/lib/components/Container'
import Button from 'orionsoft-parts/lib/components/Button'
import moment from 'moment'
import IoIosTennisball from 'react-icons/lib/io/ios-tennisball'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import Tooltip from 'orionsoft-parts/lib/components/Tooltip'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import autobind from 'autobind-decorator'
import {withApollo} from 'react-apollo'

@withMutation(gql`
  mutation deleteMatch($matchId: ID) {
    deleteMatch(matchId: $matchId) {
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
    deleteMatch: PropTypes.func
  }

  getFields() {
    return [
      {
        title: '',
        name: '_id',
        render: () => <MdGamepad size={20} style={{color: '#2e2e2e'}} />
      },
      {title: 'Club', name: 'club.name'},
      {title: 'Cancha', name: 'playfield.name'},
      {title: 'Bloque', name: 'timeblock.name'},
      {title: 'Jugador 1', name: 'firstPlayerName'},
      {title: 'Jugador 2', name: 'secondPlayerName'},
      {
        title: 'Fecha',
        name: 'date',
        render: ({date}) => moment(date).format('MMMM Do YYYY')
      },
      {
        title: '',
        name: '',
        render: item => this.renderResult(item)
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

  @autobind
  async delete(item) {
    const result = window.confirm(
      `Estas eliminando el match: (Nombre del club: ${
        item.club.name
      }, nombre de la cancha: ${item.playfield.name} y bloque: ${
        item.timeblock.name
      }). ¿Deseas continuar?`
    )
    if (!result) return
    this.setState({loading: true, errorMessages: null})
    try {
      await this.props.deleteMatch(
        {matchId: item._id},
        {refetchQueries: ['paginatedMatches']}
      )
      this.props.showMessage('Match eliminado satisfactoriamente!')
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
        <Tooltip content="Eliminar Match">
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
        <Tooltip content="Editar información del match">
          <FaPencil
            onClick={() =>
              this.props.history.push(`/matches/update/${item._id}`)
            }
            style={{color: '#2e2e2e'}}
          />
        </Tooltip>
      </div>
    )
  }

  renderResult(item) {
    return (
      <div className={styles.result}>
        <Tooltip content="Actualizar resultados del Match">
          <IoIosTennisball
            onClick={() =>
              this.props.history.push(`/matches/result/${item._id}`)
            }
            style={{color: '#299814'}}
          />
        </Tooltip>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.container}>
        <Container>
          <h1>Matches</h1>
          <div className={styles.divider} />
          <Paginated
            loadingComponent={Loading}
            queryName="paginatedMatches"
            fields={this.getFields()}
            params="$filter: String"
          />
          <div className={styles.button}>
            <Button
              primary
              onClick={() => this.props.history.push(`/matches/creatematch`)}>
              Crear Match
            </Button>
          </div>
        </Container>
      </div>
    )
  }
}
