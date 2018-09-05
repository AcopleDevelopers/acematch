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
import enabledDayOptions from 'App/helpers/days/enabledDayOptions'
import Delete from './Delete'

@withRouterId
@withGraphQL(gql`
  query timeblockInfo($clubId: ID, $timeblockId: ID) {
    getTimeblock(timeblockId: $timeblockId) {
      _id
      name
      createdAt
      clubId
      startTime
      endTime
      activeDays
      playfieldIds
    }
    playfields(clubId: $clubId) {
      _id
      name
    }
  }
`)
export default class UpdateTimeblock extends React.Component {
  static propTypes = {
    getTimeblock: PropTypes.object,
    playfields: PropTypes.object
  }

  state = {}

  componentDidMount() {
    if (!this.props.getTimeblock) return
    const {
      _id,
      clubId,
      name,
      startTime,
      endTime,
      activeDays,
      playfieldIds
    } = this.props.getTimeblock
    const firstDate = new Date(startTime)
    const secondDate = new Date(endTime)
    const firstTime = `${firstDate.getHours()}:${firstDate.getMinutes()}`
    const secondTime = `${secondDate.getHours()}:${secondDate.getMinutes()}`
    const options = enabledDayOptions(activeDays)
    this.setState({
      timeblockId: _id,
      clubId,
      name,
      startTime: firstTime,
      endTime: secondTime,
      activeDays: options,
      playfieldIds: playfieldIds
    })
  }

  playfieldsOptions() {
    const {playfields} = this.props
    const options = playfields.map(field => {
      return {label: field.name, value: field._id}
    })
    return options
  }

  render() {
    const {timeblockId, clubId} = this.state
    return (
      <div className={styles.container}>
        <Container>
          <h1>Actualizar Bloque</h1>
          <Delete timeblockId={timeblockId} clubId={clubId} />
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
          <Save data={this.state} />
        </Container>
      </div>
    )
  }
}
