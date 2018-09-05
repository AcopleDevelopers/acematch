import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import {Form, Field} from 'simple-react-form'
import Select from 'orionsoft-parts/lib/components/fields/Select'
import FormFields from 'App/components/fields/FormFields'
import {date} from './fields'
import Button from 'orionsoft-parts/lib/components/Button'
import TimeblockQuery from './TimeblockQuery'
import {withApollo} from 'react-apollo'
import SelectBlock from './SelectBlock'
import isEmpty from 'lodash/isEmpty'
import {withRouter} from 'react-router-dom'
import getClubs from 'App/helpers/MatchFind/getClubs'
import getPlayfields from 'App/helpers/MatchFind/getPlayfields'

@withApollo
@withRouter
export default class SelectClub extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    client: PropTypes.object,
    data: PropTypes.array
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
    return (
      <div className={styles.container}>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="label">Selecciona un Club</div>
              <Field
                fieldName="clubId"
                type={Select}
                options={getClubs(this.props)}
              />
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="label">Selecciona una Cancha</div>
              <Field
                fieldName="playfieldId"
                type={Select}
                options={getPlayfields(this.state, this.props)}
              />
            </div>
          </div>
          <FormFields fields={date} className="row" />
        </Form>
        <div className={styles.divider} />
        <div className={styles.button}>
          <Button primary onClick={() => this.search()}>
            Buscar Bloque
          </Button>
          <Button onClick={() => this.props.history.push('/matches')}>
            Volver
          </Button>
        </div>
        <SelectBlock data={this.state} />
      </div>
    )
  }
}
