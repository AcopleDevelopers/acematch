import {Roles} from 'meteor/nicolaslopezj:roles'
import setUserProfile from './setUserProfile'
import deleteUser from './deleteUser'
import createAdmin from './createAdmin'
import deleteAdmin from './deleteAdmin'
import createCustomer from './createCustomer'
import registerCard from './registerCard'
import createSubscription from './createSubscription'
import updateSubscription from './updateSubscription'
import cancelSubscription from './cancelSubscription'
import deleteCard from './deleteCard'
import updateUserProfile from './updateUserProfile'
import deleteSubscription from './deleteSubscription'
import updateUserSubscription from './updateUserSubscription'
import deleteUserCard from './deleteUserCard'
import deleteUserSubscription from './deleteUserSubscription'
import insertUser from './insertUser'
import updateAdminEmail from './updateAdminEmail'
import updateAdmin from './updateAdmin'

export default {
  updateAdmin,
  @Roles.action('super-admin') updateAdminEmail,
  insertUser,
  deleteUserSubscription,
  deleteUserCard,
  updateUserSubscription,
  deleteSubscription,
  updateUserProfile,
  deleteCard,
  cancelSubscription,
  updateSubscription,
  createSubscription,
  registerCard,
  createCustomer,
  @Roles.action('super-admin') deleteAdmin,
  @Roles.action('super-admin') createAdmin,
  @Roles.action('admin-permissions') deleteUser,
  setUserProfile
}
