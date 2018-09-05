import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import CreateClub from './CreateClub'
import UpdateClub from './UpdateClub'
import Elements from './Elements'
import UpdatePlayfield from './UpdatePlayfield'
import UpdateTimeblock from './UpdateTimeblock'
import CreatePlayfield from './CreatePlayfield'
import CreateBlock from './CreateBlock'
import requireRole from 'orionsoft-parts/lib/decorators/requireRole'

@requireRole('superAdmin')
export default class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div className={styles.container}>
        <Switch>
          <Route exact path="/clubs" component={Home} />
          <Route path="/clubs/createclub" component={CreateClub} />
          <Route path="/clubs/updateclub/:clubId" component={UpdateClub} />
          <Route path="/clubs/elements/:clubId" component={Elements} />
          <Route path="/clubs/createplayfield/:clubId" component={CreatePlayfield} />
          <Route path="/clubs/createblock/:clubId" component={CreateBlock} />
          <Route path="/clubs/playfieldupdate/:playfieldId/" component={UpdatePlayfield} />
          <Route path="/clubs/timeblocksupdate/:timeblockId/:clubId" component={UpdateTimeblock} />
        </Switch>
      </div>
    )
  }
}
