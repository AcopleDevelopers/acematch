import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import Container from 'orionsoft-parts/lib/components/Container'
import {Form} from 'simple-react-form'
import FormFields from 'App/components/fields/FormFields'
import withRouterId from 'App/Decorators/withRouterId'
import {profile, account} from './fields'
import {withRouter} from 'react-router'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import Save from './Save'

@withRouterId
@withGraphQL(gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      profile {
        firstName
        lastName
        birthdate
        genre
      }
      roles
      emails {
        address
      }
      enabled
    }
  }
`)
@withRouter
export default class UpdateAdmin extends React.Component {
  static propTypes = {
    router: PropTypes.object,
    user: PropTypes.object,
    userId: PropTypes.string
  }

  state = {}

  componentDidMount() {
    const {user} = this.props
    const object = {
      ...user.profile,
      ...{
        roles: user.roles[0],
        email: user.emails[0].address,
        enabled: user.enabled
      }
    }
    this.setState(object)
  }

  render() {
    const {userId} = this.props
    return (
      <div className={styles.container}>
        <Container>
          <h1>Actualizar Administrador</h1>
          <Form state={this.state} onChange={changes => this.setState(changes)}>
            <FormFields fields={account} className="row" />
            <div className={styles.divider} />
            <FormFields fields={profile} className="row" />
          </Form>
          <Save data={this.state} userId={userId} />
        </Container>
      </div>
    )
  }
}
