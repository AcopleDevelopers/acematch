import React from 'react'
import PropTypes from 'prop-types'
import Container from 'orionsoft-parts/lib/components/Container'
import styles from './styles.css'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import SelectClub from './SelectClub'
import gql from 'graphql-tag'

@withGraphQL(gql`
  query clubs {
    clubs {
      _id
      name
      createdAt
      playfields {
        _id
        name
      }
    }
  }
`)
export default class CreateMatch extends React.Component {
  static propTypes = {
    clubs: PropTypes.object
  }

  render() {
    const {clubs} = this.props
    return (
      <div className={styles.container}>
        <Container>
          <h1>Crear Match</h1>
          <SelectClub data={clubs} />
        </Container>
      </div>
    )
  }
}
