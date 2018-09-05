import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  touchable: {
    marginVertical: 4,
    marginHorizontal: '10%',
    borderRadius: 30,
    overflow: 'hidden'
  },
  container: {
    aspectRatio: 2.5
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 30
  },
  title: {
    marginTop: 10,
    marginVertical: 3,
    marginLeft: '10%',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  subtitle: {
    marginLeft: '10%',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  description: {
    marginTop: 8,
    marginLeft: '10%',
    color: 'white',
    fontSize: 14,
    fontWeight: '100'
  }
})
