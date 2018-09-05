import {StyleSheet} from 'react-native'
import {Constants} from 'expo'

export default StyleSheet.create({
  container: {
    width: '100%'
  },
  statusBar: {
    height: Constants.statusBarHeight,
    width: '100%',
    backgroundColor: '#F6F6F6'
  },
  header: {
    flexDirection: 'row',
    height: 40,
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#F6F6F6',
    alignItems: 'center'
  }
})
