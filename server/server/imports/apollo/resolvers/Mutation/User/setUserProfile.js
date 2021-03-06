import {Meteor} from 'meteor/meteor'
import {createModifier, validate} from 'meteor/orionsoft:apollo-helpers'

export default function(root, {userId, profile}, context) {
  if (context.userId !== userId) throw new Error('Unauthorized')

  const keys = {
    'profile.birthdate': 'birthdate',
    'profile.genre': 'genre',
    'profile.weight': 'weight',
    'profile.height': 'height',
    'profile.picture': 'picture'
  }

  const modifier = createModifier(profile, keys)
  validate(Meteor.users, modifier, keys)
  Meteor.users.update(userId, modifier)
  return Meteor.users.findOne(userId)
}
