import React from 'react'
import PropTypes from 'prop-types'
import Container from 'orionsoft-parts/lib/components/Container'
import styles from './styles.css'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import Image from './Image'
import withRouterId from 'App/Decorators/withRouterId'
import {Form, Field} from 'simple-react-form'
import fileUpload from 'App/helpers/fields/fileUpload'
import Text from 'orionsoft-parts/lib/components/fields/Text'
import Save from './Save'

@withRouterId
@withGraphQL(gql`
  query getClub($clubId: ID) {
    getClub(clubId: $clubId) {
      _id
      name
      picture {
        url
      }
    }
  }
`)
export default class UpdateClub extends React.Component {
  static propTypes = {
    getClub: PropTypes.object
  }

  state = {}

  componentDidMount() {
    const {_id, name, picture} = this.props.getClub
    this.setState({clubId: _id, name, picture})
  }

  render() {
    const {picture} = this.state
    return (
      <div className={styles.container}>
        <Container>
          <h1>Actualizar Club</h1>
          <Form state={this.state} onChange={changes => this.setState(changes)}>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className={styles.field}>
                  <div className="label">Nombre del Club</div>
                  <Field fieldName="name" type={Text} />
                </div>
                <div className={styles.field}>
                  <div className="label">imagen (Opcional)</div>
                  <Field fieldName="picture" label="File" {...fileUpload} />
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <Image picture={picture} />
              </div>
            </div>
          </Form>
          <Save data={this.state} />
        </Container>
      </div>
    )
  }
}
