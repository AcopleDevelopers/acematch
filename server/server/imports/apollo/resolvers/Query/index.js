import User from './User'
import Match from './Match'
import Club from './Club'
import Playfield from './Playfield'
import Timeblock from './Timeblock'
import Device from './Device'

export default {
  ...Device,
  ...Timeblock,
  ...Playfield,
  ...Club,
  ...Match,
  ...User
}
