import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  },
  wrapper: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignSelf: 'baseline',
    height: 13
  },
  textContainer: {
    flex: 1
  },
  dot: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15
  },
  innerDot: {
    width: 14,
    height: 14,
    backgroundColor: '#0098FF',
    borderRadius: 7
  },
  text: {
    fontSize: 13,
    color: 'white'
  },
  link: {
    color: '#0098FF'
  }
})
