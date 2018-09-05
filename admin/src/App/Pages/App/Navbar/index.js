import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import Container from 'orionsoft-parts/lib/components/Container'
import Logo from './Logo'
import Menu from './Menu'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import Links from './Links'

@withGraphQL(gql`
  query me {
    me {
      _id
      name
    }
  }
`)
export default class Navbar extends React.Component {
  static propTypes = {
    me: PropTypes.object
  }

  render() {
    const {me} = this.props
    return (
      <div className={styles.container}>
        <Container>
          <div className={styles.flex}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <div className={styles.name}>{me.name}</div>
            <div className={styles.links}>
              <Links />
            </div>
            <div className={styles.menu}>
              <Menu />
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
