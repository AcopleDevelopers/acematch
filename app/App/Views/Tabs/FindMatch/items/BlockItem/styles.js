import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    width: '80%',
    marginHorizontal: '10%',
    marginVertical: 5
  },
  info: {
    flexDirection: 'row',
    width: '100%'
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444'
  },
  players: {
    flex: 1,
    fontSize: 13,
    color: '#444',
    fontWeight: '100',
    textAlign: 'right'
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10
  },
  notAvailable: {
    color: '#CCC',
    fontWeight: 'bold'
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#444',
    marginTop: 8
  }
})
