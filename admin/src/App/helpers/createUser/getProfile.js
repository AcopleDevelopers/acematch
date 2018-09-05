import cloneDeep from 'lodash/cloneDeep'

export default function(user) {
  const profile = cloneDeep(user)
  delete profile.email
  delete profile.plainPassword
  delete profile.plainPassword2
  profile['acceptTerms'] = true
  return profile
}
