export default function(user) {
  if (!user) return false
  if (!user.plainPassword || !user.plainPassword2) return false
  if (user.plainPassword !== user.plainPassword2) return false
  if (
    !user.email ||
    !user.plainPassword ||
    !user.plainPassword2 ||
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
