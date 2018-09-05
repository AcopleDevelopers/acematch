import {StyleSheet, Platform} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    ...(Platform.OS === 'ios' ? {} : {paddingHorizontal: '10%'})
  }
})
