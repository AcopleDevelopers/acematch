import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import withRouterId from 'App/Decorators/withRouterId'
import Information from './Information'
import UpdateProfile from './UpdateProfile'
import UpdateSubscription from './UpdateSubscription'
import Container from 'orionsoft-parts/lib/components/Container'
import Loading from 'App/components/Loading'

@withRouterId
@withGraphQL(
  gql`
    query user($userId: ID!) {
      user(userId: $userId) {
        _id
        email
        name
        subscriptionId
        profile {
          firstName
          lastName
          birthdate
          genre
          weight
          height
          ranking
          category
          phone
          picture {
            url
          }
        }
        customerId
        expertiseLevel
        playedGames
        lostMatches
        wonMatches
        age
        subscription {
          id
          status
          debt
          start
          end
          plan {
            id
            name
            price
          }
        }
        creditCard {
          uid
          status
          card {
            id
            last_4_digits
            card_type
            payment_type
            created_at
          }
          created_at
          updated_at
        }
      }
    }
  `,
  {Loading: <Loading />}
)
export default class UpdateUser extends React.Component {
  static propTypes = {
    user: PropTypes.object
  }

  render() {
    const {user} = this.props
    return (
      <div className={styles.container}>
        <Container>
          <Information user={user} />
          <UpdateProfile user={user} />
          <div className={styles.divider} />
          <UpdateSubscription user={user} />
        </Container>
      </div>
    )
  }
}
