import {StyleSheet, Dimensions, Platform} from 'react-native'

export default StyleSheet.create({
  swipper:
    Platform.OS === 'ios'
      ? {}
      : {
        width: Dimensions.get('window').width,
        flex: 1
      },
  title: {
    marginTop: 40,
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    justifyContent: 'space-around'
  },
  input: {
    width: '100%'
  },
  text: {
    color: '#FFFD',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 3
  }
})
