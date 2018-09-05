import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 20,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3
  },
  activeDot: {
    backgroundColor: 'white'
  }
})
