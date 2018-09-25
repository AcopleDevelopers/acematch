import {StyleSheet, Platform} from 'react-native'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: Platform.OS === 'ios' ? 200 : 176
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  title: {
    marginTop: Platform.OS === 'ios' ? 40 : 16,
    marginBottom: 0,
    marginHorizontal: '10%'
  },
  bottomComponents: {
    marginTop: 10,
    marginHorizontal: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  left: {
    justifyContent: 'flex-start'
  },
  center: {
    justifyContent: 'center'
  },
  right: {
    justifyContent: 'flex-end'
  }
})
