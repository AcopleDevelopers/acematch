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
    !user.category ||
    !user.genre ||
    !user.height ||
    !user.weight
  ) {
    return false
  }

  return true
}
