import React from 'react'
import styles from './styles.css'
import Section from 'App/components/Section'
import Button from 'orionsoft-parts/lib/components/Button'
import {Form, Field} from 'simple-react-form'
import Text from 'orionsoft-parts/lib/components/fields/Text'
import autobind from 'autobind-decorator'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import {changePassword} from 'meteor-apollo-accounts'
import {withApollo} from 'react-apollo'
import PropTypes from 'prop-types'

@withMessage
@withApollo
export default class ChangePassword extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    client: PropTypes.func,
    showMessage: PropTypes.func
  }

  state = {}

  @autobind
  async save({oldPassword, newPassword, confirm}) {
    if (newPassword !== confirm) {
      return this.setState({errorMessage: 'New password doesn\t match'})
    }
    this.setState({loading: true, errorMessage: ''})
    try {
      await changePassword({oldPassword, newPassword}, this.props.client)
      this.props.showMessage('Tu contraseña fue cambiada exitosamente')
      this.setState({errorMessage: ''})
    } catch (error) {
      this.setState({errorMessage: error.message})
      this.refs.form.clearForm()
    }
    this.setState({loading: false})
  }

  render() {
    return (
      <div className={styles.container}>
        <Section top title="Cambiar contraseña" description="">
          <Form ref="form" state={this.state.form} onSubmit={this.save}>
            <Field
              fieldName="oldPassword"
              fieldType="password"
              placeholder="Contraseña actual"
              type={Text}
            />
            <div className={styles.divider} />
            <Field
              fieldName="newPassword"
              fieldType="password"
              placeholder="Nueva contraseña"
              type={Text}
            />
            <Field
              fieldName="confirm"
              fieldType="password"
              placeholder="Confirmar nueva contraseña"
              type={Text}
            />
          </Form>
          <br />
          <div className={styles.error}>{this.state.errorMessage}</div>
          <Button
            loading={this.state.loading}
            primary
            onClick={() => this.refs.form.submit()}>
            Cambiar contraseña
          </Button>
        </Section>
      </div>
    )
  }
}
