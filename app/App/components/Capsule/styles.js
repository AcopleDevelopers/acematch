import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  capsule: {
    width: '100%',
    height: '22%',
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
    fontSize: 30,
    fontWeight: '300'
  },
  body: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingRight: 5
  },
  bottom: {
    color: 'white',
    fontSize: 16,
    fontWeight: '100'
  }
})
