import User from './User'
import Club from './Club'
import Playfield from './Playfield'
import Timeblock from './Timeblock'
import Match from './Match'
import Device from './Device'

export default {
  ...Device,
  ...Match,
  ...Timeblock,
  ...Playfield,
  ...Club,
  ...User
}
