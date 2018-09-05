import {StyleSheet, Platform} from 'react-native'

export default StyleSheet.create({
  container: {
    width: Platform.OS === 'ios' ? '48%' : '45%',
    aspectRatio: 0.9,
    alignItems: 'center'
  },
  badge: {
    width: '90%',
    aspectRatio: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  image: {
    top: 0,
    left: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 30,
    overflow: 'hidden'
  },
  content: {
    color: 'white',
    fontSize: 40
  },
  label: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#888'
  }
})
