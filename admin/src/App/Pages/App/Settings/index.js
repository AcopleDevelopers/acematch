import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Profile from './Profile'
import Password from './Password'
import Tabs from 'orionsoft-parts/lib/components/Tabs'
import PropTypes from 'prop-types'
import Container from 'orionsoft-parts/lib/components/Container'
import forceLogin from 'orionsoft-parts/lib/decorators/forceLogin'

@forceLogin
export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div>
        <Container>
          <h1>Configuración</h1>
          <Tabs
            items={[
              {title: 'Email', path: '/settings'},
              {title: 'Contraseña', path: '/settings/password'}
            ]}
          />
          <div className="content">
            <Switch>
              <Route exact path="/settings" component={Profile} />
              <Route path="/settings/password" component={Password} />
            </Switch>
          </div>
        </Container>
      </div>
    )
  }
}
