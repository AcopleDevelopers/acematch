import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import withRouterId from 'App/Decorators/withRouterId'
import {withRouter} from 'react-router-dom'
import Button from 'orionsoft-parts/lib/components/Button'
import {Form, Field} from 'simple-react-form'
import Text from 'orionsoft-parts/lib/components/fields/Text'
import Container from 'orionsoft-parts/lib/components/Container'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'

@withMutation(gql`
  mutation createPlayfield($name: String, $clubId: ID, $description: String) {
    createPlayfield(name: $name, clubId: $clubId, description: $description) {
      _id
      clubId
    }
  }
`)
@withRouter
@withRouterId
@withMessage
export default class CreatePlayfield extends React.Component {
  static propTypes = {
    showMessage: PropTypes.func,
    history: PropTypes.object,
    createPlayfield: PropTypes.func,
    clubId: PropTypes.string
  }

  state = {}

  async save() {
    this.setState({loading: true, errorMessages: null})
    const {name, description} = this.state
    const {clubId} = this.props
    try {
      await this.props.createPlayfield({
        name: name,
        clubId: clubId,
        description: description
      })
      this.props.history.push(`/clubs/elements/${clubId}`)
      this.props.showMessage('Success')
    } catch (error) {
      console.log('Error:', error)
      this.props.showMessage(error.message, {level: 'error'})
    }
    this.setState({loading: false})
  }

  render() {
    const {clubId} = this.props
    return (
      <div className={styles.container}>
        <Container>
          <h1>Crear Cancha</h1>
          <Form state={this.state} onChange={changes => this.setState(changes)}>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="label">Nombre de la Cancha</div>
                <Field fieldName="name" type={Text} />
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="label">Descripción de la Cancha</div>
                <Field fieldName="description" type={Text} />
              </div>
            </div>
          </Form>
          <div className={styles.buttons}>
            <Button
              loading={this.state.loading}
              disabled={!this.state.name || !this.state.description}
              primary
              onClick={() => this.save()}>
              Crear
            </Button>
            <Button
              onClick={() =>
                this.props.history.push(`/clubs/elements/${clubId}`)
              }>
              Volver
            </Button>
          </div>
        </Container>
      </div>
    )
  }
}
