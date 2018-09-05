import role from '../role'
import adminPermissions from './adminPermissions'
import superAdmin from './superAdmin'

role.allow('admin-permissions', adminPermissions)
role.allow('super-admin', superAdmin)
