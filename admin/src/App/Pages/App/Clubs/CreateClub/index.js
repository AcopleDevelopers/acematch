import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import Container from 'orionsoft-parts/lib/components/Container'
import {Form, Field} from 'simple-react-form'
import Text from 'orionsoft-parts/lib/components/fields/Text'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import {withRouter} from 'react-router-dom'
import Button from 'orionsoft-parts/lib/components/Button'
import fileUpload from 'App/helpers/fields/fileUpload'

@withMutation(gql`
  mutation createClub($name: String, $picture: FileInput) {
    createClub(name: $name, picture: $picture) {
      _id
      name
    }
  }
`)
@withRouter
@withMessage
export default class CreateClub extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    showMessage: PropTypes.func,
    createClub: PropTypes.func
  }

  state = {}

  async save() {
    this.setState({loading: true, errorMessages: null})
    const {name, picture} = this.state
    try {
      await this.props.createClub({name, picture})
      this.props.history.push('/clubs')
      this.props.showMessage('Club creado exitosamente!')
    } catch (error) {
      console.log('Error:', error)
      this.props.showMessage(error, {level: 'error'})
    }
    this.setState({loading: false})
  }

  render() {
    return (
      <div className={styles.container}>
        <Container>
          <h1>Crear Club</h1>
          <Form state={this.state} onChange={changes => this.setState(changes)}>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="label">Nombre del Club</div>
                <Field fieldName="name" type={Text} />
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="label">Imagen (Opcional)</div>
                <Field fieldName="picture" {...fileUpload} />
              </div>
            </div>
          </Form>
          <div className={styles.button}>
            <Button
              primary
              onClick={() => this.save()}
              disabled={!this.state.name}
              loading={this.state.loading}
            >
              Crear Club
            </Button>
            <Button onClick={() => this.props.history.push('/clubs')}>
              volver
            </Button>
          </div>
        </Container>
      </div>
    )
  }
}
