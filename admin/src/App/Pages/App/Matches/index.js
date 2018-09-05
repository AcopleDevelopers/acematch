import React from 'react'
import styles from './styles.css'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import Elements from './Elements'
import UpdateMatch from './UpdateMatch'
import CreateMatch from './CreateMatch'
import UpdateResult from './UpdateResult'

export default class Layout extends React.Component {
 static propTypes = {
   children: PropTypes.node
 }

 render() {
   return (
     <div className={styles.container}>
       <Switch>
         <Route exact path="/matches" component={Elements} />
         <Route path="/matches/creatematch" component={CreateMatch} />
         <Route path="/matches/update/:matchId" component={UpdateMatch} />
         <Route path="/matches/result/:matchId" component={UpdateResult} />
       </Switch>
     </div>
   )
 }
}
