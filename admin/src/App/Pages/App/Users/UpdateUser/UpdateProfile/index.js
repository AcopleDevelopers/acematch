import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'
import {Form, Field} from 'simple-react-form'
import fileUpload from 'App/helpers/fields/fileUpload'
import Save from './Save'
import Image from './Image'
import FormFields from 'App/components/fields/FormFields'
import {profileLeft, profileRight} from './fields'

export default class UpdateProfile extends React.Component {
  static propTypes = {
    user: PropTypes.object
  }

  componentDidMount() {
    const {user} = this.props
    this.setState(user.profile)
  }

  state = {}

  render() {
    const {user} = this.props
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Actualizar datos personales del jugador</h1>
        </div>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <FormFields fields={profileLeft} />
            </div>
            <div className="col-xs-12 col-sm-4">
              <FormFields fields={profileRight} />
              <div className="label">Foto (opcional)</div>
              <Field fieldName="picture" label="File" {...fileUpload} />
            </div>
            <div className="col-xs-12 col-sm-4">
              <Image picture={user.profile.picture} />
            </div>
          </div>
        </Form>
        <div className={styles.save}>
          <Save userId={user._id} data={this.state} />
        </div>
      </div>
    )
  }
}
