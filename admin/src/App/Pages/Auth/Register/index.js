import React from 'react'
import translate from 'App/i18n/translate'
import Translate from 'App/i18n'
import {Form, Field} from 'simple-react-form'
import Text from 'orionsoft-parts/lib/components/fields/Text'
import Button from 'orionsoft-parts/lib/components/Button'
import styles from '../styles.css'
import autobind from 'autobind-decorator'
import {createUser} from 'meteor-apollo-accounts'
// import Social from './Social'
import {withApollo} from 'react-apollo'
import track from 'App/helpers/track'
import getQueryParam from 'orionsoft-parts/lib/helpers/getQueryParam'
import PropTypes from 'prop-types'

@withApollo
export default class Register extends React.Component {
  state = {}

  static propTypes = {
    setLoading: PropTypes.func,
    setError: PropTypes.func,
    onSuccess: PropTypes.func,
    isLoading: PropTypes.bool,
    client: PropTypes.object
  }

  state = {}

  componentDidMount() {
    const email = getQueryParam('email')
    if (email) {
      this.setState({email})
    }
    this.setState({profile: {adminRequest: true}})
  }

  @autobind
  async login() {
    if (!this.canRegister()) return
    if (this.state.password !== this.state.confirm) {
      return this.props.setError(
        <Translate tr="auth.pages.passwordDoesntMatch" />
      )
    }
    this.props.setLoading(true)
    this.props.setError(null)
    try {
      await createUser(this.state, this.props.client)
      this.props.onSuccess()
      track('register')
    } catch (e) {
      this.props.setError(e.message)
      this.props.setLoading(false)
    }
  }

  @autobind
  handleConfirmKey(event) {
    if (event.charCode === 13 || event.keyCode === 13) {
      this.login()
    }
  }

  canRegister() {
    return this.state.email && this.state.password && this.state.confirm
  }

  renderButtons() {
    return (
      <div className={styles.buttonsContainer}>
        <Button
          disabled={!this.canRegister()}
          primary
          onClick={this.login}
          fullWidth
          loading={this.props.isLoading}>
          <Translate tr="auth.pages.register" />
        </Button>
      </div>
    )
  }

  render() {
    return (
      <div>
        {/* <Social {...this.props} /> */}
        <Form
          state={this.state}
          onChange={changes => this.setState(changes)}
          onSubmit={this.login}>
          <Field
            fieldName="email"
            type={Text}
            fieldType="email"
            placeholder={translate('auth.pages.email')}
          />
          <br />
          <Field
            fieldName="password"
            type={Text}
            fieldType="password"
            placeholder={translate('auth.pages.password')}
          />
          <br />
          <Field
            fieldName="confirm"
            type={Text}
            fieldType="password"
            placeholder={translate('auth.pages.confirmPassword')}
            onKeyPress={this.handleConfirmKey}
          />
        </Form>
        {this.renderButtons()}
        <br />
        <Translate tr="auth.pages.otherLinksInRegister" />
      </div>
    )
  }
}
