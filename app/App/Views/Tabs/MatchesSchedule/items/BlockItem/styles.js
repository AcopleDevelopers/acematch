import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    width: '80%',
    marginHorizontal: '10%',
    marginVertical: 5
  },
  info: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start'
  },
  names: {
    alignItems: 'flex-start',
    flex: 1
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444'
  },
  extra: {
    marginTop: 8,
    fontSize: 13,
    color: '#444',
    fontWeight: '100'
  },
  cancel: {
    fontSize: 13,
    color: '#0098FF',
    flexWrap: 'wrap',
    width: 100,
    textAlign: 'right'
  },
  noCancel: {
    fontSize: 13,
    color: '#CCC',
    flexWrap: 'wrap',
    width: 100,
    textAlign: 'right',
    fontWeight: '100'
  },
  waiting: {
    fontSize: 13,
    color: '#444',
    flexWrap: 'wrap',
    width: 100,
    textAlign: 'right'
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#444',
    marginTop: 13
  },
  right: {
    justifyContent: 'space-between'
  }
})
