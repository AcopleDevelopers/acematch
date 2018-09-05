import {StyleSheet, Platform} from 'react-native'

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 160 : 136,
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
    overflow: 'hidden'
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#DDD'
  }
})
