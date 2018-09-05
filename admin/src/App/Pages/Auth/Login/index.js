import React from 'react'
import Translate from 'App/i18n'
import translate from 'App/i18n/translate'
import {Form, Field} from 'simple-react-form'
import Text from 'orionsoft-parts/lib/components/fields/Text'
import Button from 'orionsoft-parts/lib/components/Button'
import styles from '../styles.css'
import autobind from 'autobind-decorator'
import {loginWithPassword} from 'meteor-apollo-accounts'
// import Social from './Social'
import {withApollo} from 'react-apollo'
import PropTypes from 'prop-types'

@withApollo
export default class Login extends React.Component {
  state = {}

  static propTypes = {
    setLoading: PropTypes.func,
    setError: PropTypes.func,
    onSuccess: PropTypes.func,
    isLoading: PropTypes.bool,
    client: PropTypes.object
  }

  @autobind
  async login() {
    this.props.setLoading(true)
    this.props.setError(null)
    try {
      await loginWithPassword(this.state, this.props.client)
      this.props.onSuccess()
    } catch (e) {
      console.log('Error loggin in', e)
      this.props.setError(e.message)
      this.props.setLoading(false)
    }
  }

  @autobind
  handleEmailKey(event) {
    if (event.charCode === 13 || event.keyCode === 13) {
      this.refs.password.refs.input.refs.input.focus()
    }
  }

  @autobind
  handlePasswordKey(event) {
    if (event.charCode === 13 || event.keyCode === 13) {
      this.login()
    }
  }

  canLogin() {
    return this.state.email && this.state.password
  }

  renderButtons() {
    return (
      <div className={styles.buttonsContainer}>
        <Button
          disabled={!this.canLogin()}
          primary
          onClick={this.login}
          fullWidth
          loading={this.props.isLoading}>
          <Translate tr="auth.pages.login" />
        </Button>
      </div>
    )
  }

  render() {
    return (
      <div>
        {/* <Social {...this.props} /> */}
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <Field
            fieldName="email"
            type={Text}
            autoFocus
            fieldType="email"
            placeholder={translate('auth.pages.email')}
            onKeyPress={this.handleEmailKey}
          />
          <br />
          <Field
            fieldName="password"
            type={Text}
            ref="password"
            fieldType="password"
            placeholder={translate('auth.pages.password')}
            onKeyPress={this.handlePasswordKey}
          />
        </Form>
        {this.renderButtons()}
        <br />
        <Translate tr="auth.pages.otherLinksInLogin" />
      </div>
    )
  }
}
