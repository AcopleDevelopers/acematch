import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginVertical: 10
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  label: {
    fontSize: 14,
    color: '#444',
    fontWeight: 'bold'
  },
  input: {
    flex: 1,
    fontSize: 14,
    textAlign: 'right',
    marginLeft: 10
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#444',
    marginTop: 5
  }
})
