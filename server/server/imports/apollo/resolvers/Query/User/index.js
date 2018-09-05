import {Roles} from 'meteor/nicolaslopezj:roles'
import me from './me'
import user from './user'
import newUsers from './newUsers'
import paginatedAdmins from './paginatedAdmins'
import paginatedUsers from './paginatedUsers'
import allUsers from './allUsers'

export default {
  @Roles.action('admin-permissions') allUsers,
  @Roles.action('admin-permissions') paginatedUsers,
  @Roles.action('super-admin') paginatedAdmins,
  @Roles.action('admin-permissions') newUsers,
  me,
  @Roles.action('admin-permissions') user
}
