import moment from 'moment'

export default function(user, params, context) {
  const actualDate = new Date()
  const userBirthdate = new Date(user.profile.birthdate)
  const age = moment().diff(moment(userBirthdate, actualDate), 'years')
  return age
}
