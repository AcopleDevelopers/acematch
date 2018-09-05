import {StyleSheet, Dimensions} from 'react-native'
import {Constants} from 'expo'

export default StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    height: Dimensions.get('window').height - Constants.statusBarHeight
  },
  innerContainer: {
    flex: 1,
    marginBottom: 30,
    paddingHorizontal: '10%'
  },
  background: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  }
})
