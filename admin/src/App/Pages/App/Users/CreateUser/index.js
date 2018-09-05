import React from 'react'
import PropTypes from 'prop-types'
import Container from 'orionsoft-parts/lib/components/Container'
import styles from './styles.css'
import {withApollo} from 'react-apollo'
import {withRouter} from 'react-router'
import {Form} from 'simple-react-form'
import FormFields from 'App/components/fields/FormFields'
import {register, profile} from './fields'
import Save from './Save'

@withApollo
@withRouter
export default class CreateUser extends React.Component {
  static propTypes = {
    router: PropTypes.object,
    client: PropTypes.object
  }

  state = {}

  renderForm() {
    return (
      <div className={styles.form}>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <div className={styles.account}>
            <strong>Cuenta</strong>
            <div className={styles.divider} />
            <FormFields fields={register} className="row" />
          </div>
          <div className={styles.profile}>
            <div className={styles.subTitle}>
              <strong>Perfil de Usuario</strong>
              <div className={styles.divider} />
            </div>
            <FormFields fields={profile} className="row" />
          </div>
        </Form>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.container}>
        <Container>
          <h1>Crear Usuario</h1>
          {this.renderForm()}
          <Save userInformation={this.state} />
        </Container>
      </div>
    )
  }
}
