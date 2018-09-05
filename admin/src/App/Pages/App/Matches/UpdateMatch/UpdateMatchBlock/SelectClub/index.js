import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import {Form, Field} from 'simple-react-form'
import Select from 'orionsoft-parts/lib/components/fields/Select'
import Button from 'orionsoft-parts/lib/components/Button'
import TimeblockQuery from '../../../CreateMatch/SelectClub/TimeblockQuery'
import {withApollo} from 'react-apollo'
import SelectBlock from './SelectBlock'
import isEmpty from 'lodash/isEmpty'
import {date} from '../../../CreateMatch/SelectClub/fields'
import getClubs from 'App/helpers/MatchFind/getClubs'
import FormFields from 'App/components/fields/FormFields'
import getPlayfields from 'App/helpers/MatchFind/getPlayfields'

@withApollo
export default class SelectClub extends React.Component {
  static propTypes = {
    client: PropTypes.object,
    data: PropTypes.array,
    matchId: PropTypes.string
  }

  state = {queryResult: null}

  async search() {
    const {playfieldId, startDate, endDate} = this.state
    if (!playfieldId || !startDate || !endDate) return
    const result = await this.props.client.query({
      query: TimeblockQuery,
      variables: {playfieldId, startDate, endDate},
      fetchPolicy: 'network-only'
    })
    if (
      !result.data.getTimeblockForMatches ||
      isEmpty(result.data.getTimeblockForMatches)
    ) {
      this.setState({queryResult: []})
    } else {
      this.setState({queryResult: result.data.getTimeblockForMatches})
    }
  }

  render() {
    const {matchId} = this.props
    return (
      <div className={styles.container}>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <div className="row">
            <div className="col-xs-12 col-sm-3">
              <div className="label">Selecciona un Club</div>
              <Field
                fieldName="clubId"
                type={Select}
                options={getClubs(this.props)}
              />
            </div>
            <div className="col-xs-12 col-sm-3">
              <div className="label">Selecciona una Cancha</div>
              <Field
                fieldName="playfieldId"
                type={Select}
                options={getPlayfields(this.state, this.props)}
              />
            </div>
            <div className="col-xs-12 col-sm-6">
              <FormFields fields={date} className="row" />
            </div>
          </div>
        </Form>
        <div className={styles.button}>
          <Button primary onClick={() => this.search()}>
            Buscar Bloque
          </Button>
        </div>
        <SelectBlock data={this.state} matchId={matchId} />
      </div>
    )
  }
}
