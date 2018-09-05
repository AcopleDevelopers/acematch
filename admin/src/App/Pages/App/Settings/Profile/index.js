import React from 'react'
import styles from './styles.css'
import Section from 'App/components/Section'
import Button from 'orionsoft-parts/lib/components/Button'
import {Form, Field} from 'simple-react-form'
import Text from 'orionsoft-parts/lib/components/fields/Text'
import autobind from 'autobind-decorator'
import withMessage from 'orionsoft-parts/lib/decorators/withMessage'
import PropTypes from 'prop-types'
import withMutation from 'react-apollo-decorators/lib/withMutation'
import gql from 'graphql-tag'

@withMutation(gql`
  mutation updateAdminEmail(
    $oldEmail: String
    $newEmail: String
    $confirmEmail: String
  ) {
    updateAdminEmail(
      oldEmail: $oldEmail
      newEmail: $newEmail
      confirmEmail: $confirmEmail
    ) {
      success
    }
  }
`)
@withMessage
export default class Profile extends React.Component {
  static propTypes = {
    updateAdminEmail: PropTypes.func,
    showMessage: PropTypes.func
  }

  state = {}

  @autobind
  async save() {
    this.setState({loading: true, errorMessages: null})
    const {oldEmail, newEmail, confirmEmail} = this.state
    try {
      await this.props.updateAdminEmail(
        {oldEmail, newEmail, confirmEmail},
        {refetchQueries: ['me']}
      )
      this.props.showMessage('Tu email se ha actualizado satisfactoriamente!')
    } catch (error) {
      this.props.showMessage(error.message, {level: 'error'})
    }
    this.setState({loading: false})
  }

  render() {
    return (
      <div className={styles.container}>
        <Section
          top
          title="Email"
          description="Los administradores pueden cambiar su email.">
          <Form state={this.state} onChange={changes => this.setState(changes)}>
            <div className="label">Email actual</div>
            <Field fieldName="oldEmail" placeholder="" type={Text} />
            <div className={styles.divider} />
            <div className="label">Nuevo email</div>
            <Field fieldName="newEmail" placeholder="" type={Text} />
            <div className="label">Repetir email</div>
            <Field fieldName="confirmEmail" placeholder="" type={Text} />
          </Form>
          <br />
          <Button
            loading={this.state.loading}
            primary
            onClick={() => this.save()}>
            Cambiar email
          </Button>
        </Section>
      </div>
    )
  }
}
