import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  capsule: {
    width: '100%',
    height: '33%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 20
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {
    marginTop: 10,
    color: 'white',
    fontSize: 36,
    fontWeight: '300'
  },
  body: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold'
  },
  bottom: {
    color: 'white',
    fontSize: 16,
    fontWeight: '100'
  }
})
