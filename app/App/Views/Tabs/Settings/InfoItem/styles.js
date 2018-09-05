import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    width: '80%',
    marginHorizontal: '10%',
    justifyContent: 'center',
    marginVertical: 10
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    fontSize: 16,
    color: '#444',
    fontWeight: 'bold'
  },
  value: {
    fontSize: 16,
    color: '#444',
    fontWeight: '100',
    marginRight: 5
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#444',
    marginTop: 5
  },
  action: {
    color: '#4CB9FF'
  }
})
