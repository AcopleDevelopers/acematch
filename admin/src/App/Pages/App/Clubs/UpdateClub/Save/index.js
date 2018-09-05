import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import Button from 'orionsoft-parts/lib/components/Button'
import {withRouter} from 'react-router-dom'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'

@withMutation(gql`
  mutation updateClub($clubId: ID, $name: String, $picture: FileInput) {
    updateClub(clubId: $clubId, name: $name, picture: $picture) {
      _id
      name
      picture {
        url
      }
    }
  }
`)
@withRouter
@withMessage
export default class Save extends React.Component {
  static propTypes = {
    showMessage: PropTypes.func,
    history: PropTypes.object,
    data: PropTypes.object,
    updateClub: PropTypes.func
  }

  state = {}

  async save() {
    this.setState({loading: true, errorMessages: null})
    const {clubId, name, picture} = this.props.data
    try {
      await this.props.updateClub({clubId, name, picture})
      this.props.history.push(`/clubs`)
      this.props.showMessage('Success')
    } catch (error) {
      console.log('Error:', error)
      this.props.showMessage(error.message, {level: 'error'})
    }
    this.setState({loading: false})
  }

  render() {
    return (
      <div className={styles.container}>
        <Button primary onClick={() => this.save()} loading={this.state.loading}>
          Actualizar
        </Button>
        <Button onClick={() => this.props.history.push(`/clubs`)}>Volver</Button>
      </div>
    )
  }
}
