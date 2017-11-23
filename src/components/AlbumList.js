import React from 'react'
import { Text, View } from 'react-native'

const AlbumList = props => {
  const { textStyle, viewStyle } = styles

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>AlbumList</Text>
    </View>
  )
}

const styles = {
  textStyle: {
    fontSize: 30
  },

  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
}
export default AlbumList
