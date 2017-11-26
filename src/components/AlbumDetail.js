import React from 'react'
import { View, Text } from 'react-native'

// We're just rendering content here, so make it functional component

const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  )
}

export default AlbumDetail
