export default function(user) {
  if (!user) return false
  if (
    !user.email ||
    !user.firstName ||
    !user.lastName ||
    !user.birthdate ||
    !user.genre ||
    !user.roles
  ) {
    return false
  }

  return true
}
