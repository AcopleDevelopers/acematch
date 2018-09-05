import isEmpty from 'lodash/isEmpty'

export default function(profile) {
  if (isEmpty(profile)) {
    return false
  }
  if (
    !profile.firstName ||
    !profile.lastName ||
    !profile.birthdate ||
    !profile.genre ||
    !profile.weight ||
    !profile.height ||
    !profile.category ||
    !profile.acceptTerms
  ) {
    return false
  }
  return true
}
