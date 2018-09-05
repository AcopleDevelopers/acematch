import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import withRouterId from 'App/Decorators/withRouterId'
import Container from 'orionsoft-parts/lib/components/Container'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'
import {Form, Field} from 'simple-react-form'
import Text from 'orionsoft-parts/lib/components/fields/Text'
import Save from './Save'
import Delete from './Delete'
import Disabled from './Disabled'

@withRouterId
@withGraphQL(gql`
  query getPlayfield($playfieldId: ID) {
    getPlayfield(playfieldId: $playfieldId) {
      _id
      name
      description
      clubId
      enabled
    }
  }
`)
export default class UpdatePlayfield extends React.Component {
  static propTypes = {
    getPlayfield: PropTypes.object
  }

  state = {}

  componentDidMount() {
    const {_id, name, description, clubId} = this.props.getPlayfield
    this.setState({playfieldId: _id, name, description, clubId})
  }

  render() {
    const {_id, clubId, enabled} = this.props.getPlayfield
    return (
      <div className={styles.container}>
        <Container>
          <h1>Actualizar Cancha</h1>
          <Form state={this.state} onChange={changes => this.setState(changes)}>
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <div className="label">Nombre de la Cancha</div>
                <Field fieldName="name" type={Text} />
              </div>
              <div className="col-xs-12 col-sm-5">
                <div className="label">Descripción de la Cancha</div>
                <Field fieldName="description" type={Text} />
              </div>
              <div className="col-xs-12 col-sm-3">
                <div className="row">
                  <div className="col-xs-12 col-sm-6 center-sm">
                    <Delete playfieldId={_id} clubId={clubId} />
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <Disabled playfieldId={_id} state={enabled} />
                  </div>
                </div>
              </div>
            </div>
          </Form>
          <Save data={this.state} />
        </Container>
      </div>
    )
  }
}
