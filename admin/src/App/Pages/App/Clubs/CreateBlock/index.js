import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import withRouterId from 'App/Decorators/withRouterId'
import Container from 'orionsoft-parts/lib/components/Container'
import {Form, Field} from 'simple-react-form'
import FormFields from 'App/components/fields/FormFields'
import Select from 'orionsoft-parts/lib/components/fields/Select'
import {timeblockFields} from './fields'
import Save from './Save'
import withGraphQL from 'react-apollo-decorators/lib/withGraphQL'
import gql from 'graphql-tag'

@withRouterId
@withGraphQL(gql`
  query playfields($clubId: ID) {
    playfields(clubId: $clubId) {
      _id
      name
    }
  }
`)
export default class CreateBlock extends React.Component {
  static propTypes = {
    clubId: PropTypes.object,
    playfields: PropTypes.object
  }

  state = {}

  playfieldsOptions() {
    const {playfields} = this.props
    const options = playfields.map(field => {
      return {label: field.name, value: field._id}
    })
    return options
  }

  render() {
    const {clubId} = this.props
    return (
      <div className={styles.container}>
        <Container>
          <h1>Crear Bloque</h1>
          <Form state={this.state} onChange={changes => this.setState(changes)}>
            <FormFields fields={timeblockFields} className="row" />
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="label">Cancha</div>
                <Field
                  fieldName="playfieldIds"
                  type={Select}
                  options={this.playfieldsOptions()}
                  multi
                />
              </div>
            </div>
          </Form>
          <Save clubId={clubId} data={this.state} />
        </Container>
      </div>
    )
  }
}
